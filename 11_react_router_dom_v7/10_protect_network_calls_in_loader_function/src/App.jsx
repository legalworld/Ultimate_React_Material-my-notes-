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
// import AuthProvider from "./context/AuthProvider.jsx";
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
ok so as we know that protected routes works differently
when we are working with loader function..

in this case, what happens is, the data gets fetch first and then the component
gets mount...
e.g.---> (fetch ---> mount )   

so people who has understanding of browser's network tab can easily see the response of what's been request...
no matter if you are logged out...

so in this lecture, we gonna talk about that how to 
protect network calls in loader function...

! we are protecting in the mount phase, but we also need to protect in the fetch phase also... 


* we are not using proper authentication method right now in our dummy application.... but when we gonna use it we going to work with something called JWT. it provide us a token, if user is not loggedIn then the user not going to have any token which will result in being unable to fetch the data as the user...

* but let's try something to avoid calling the req, in our dummy application... we are not going to use JWT now . but we have a trick ...


* first of all, we have to keep one thing in mind that the loader function is responsible for fetching the data, when we are following the loader function architecture .

* this loader function gets run first before my component even loads... so in this loader function first we have to stop the calling of the network req that is been held by the fetch logic inside of it...

! check the Posts.jsx file...

*/
