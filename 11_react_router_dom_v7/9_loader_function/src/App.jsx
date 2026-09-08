// ! Global import
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// ! Local Import
import {
  Home,
  Contact,
  About,
  Posts,
  Error,
  PostDetail,
  Login,
} from "./pages/index.js";
import RootLayout from "./layouts/RootLayout.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { fetchPosts } from "./pages/Posts.jsx";
import { loader as fetchSinglePost } from "./pages/PostDetail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="posts"
        loader={fetchPosts}
        errorElement={<Error />}
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route
        path="posts/:id"
        loader={fetchSinglePost}
        element={
          <RequireAuth>
            <PostDetail />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

// wrapping postDetail page with RequireAuth component,
// helps us with a certain condition... like if you go to any
// postDetail page and copy the url, then when you are logout and you are trying to go to that exact
// postDetail page, then you can't do that... cause RequireAuth will check the authentication step...
