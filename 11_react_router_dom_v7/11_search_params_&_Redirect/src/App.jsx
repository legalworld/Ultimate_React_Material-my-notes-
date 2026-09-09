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

in today's lecture, we gonna talk about, how to go back to that page via redirecct from where 
we came. 

i loggedin, now i should go to posts page rather than Home page.
so how to fix it ???
==>
   right now we are not using RequireAuth, and we are not sending any state.

  see when i redirect to login, then i can store a state inside of the URL and send it .
  we have searchParams in url.

  ! searchParams starts with ?
  ! then you can see ---> ?redirectTo=/posts
  ! here this redirectTo is the url searchParams... and it's value is /posts.
  



*/
