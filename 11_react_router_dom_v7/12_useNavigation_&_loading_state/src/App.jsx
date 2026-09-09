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
import { fetchPosts } from "./pages/Posts.jsx";
import { loader as fetchSinglePost } from "./pages/PostDetail.jsx";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="posts"
          loader={(args) => {
            return fetchPosts(args, { isLoggedIn: isLoggedIn });
          }}
          errorElement={<Error />}
          element={<Posts />}
        />
        <Route
          path="posts/:id"
          loader={(args) => {
            return fetchSinglePost(args, { isLoggedIn: isLoggedIn });
          }}
          element={<PostDetail />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;

/*

in this lecture we gonna talk about loading state...
right now we are using loaders...
what it does ? --> fetch --> mount. then we can see our data..

what i want is, during the data fetching time, i want to show some loading indicator...

! check the RootLayout.jsx file. there i implemented it via useNavigation() .

*/
