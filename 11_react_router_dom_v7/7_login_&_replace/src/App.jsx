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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route path="posts/:id" element={<PostDetail />} />
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
