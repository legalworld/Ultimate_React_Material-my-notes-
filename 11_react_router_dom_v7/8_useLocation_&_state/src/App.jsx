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

/*

after loading the app, we start from login page...
now i go to posts page but it re-direct me to login page, cause i am not loggedIn user...

now if you click on the back Button of the browser, and no matter how many times, it will take you to the same login page always... 

now why is that ?
==>
it happening because, when we click back button we are coming to posts page but it re-directs me to login page everytime...
so it kinda becomes infinite loop.... 
now how to fix it ???
---> 

i did this in the RequireAuth.jsx page-->

  return <Navigate to="/login" replace />;

*/

// --------------------------------------------------------

/*

for example, i come to the posts route, but it re-directs me to login page.
so after i login, it re-directing me to home page, but not posts page.
but it should take me to the posts page right ???
---> it is re-directing me to the home page cause we written the code that way... 
now to re-direct the users to that path from where it's been came, we have to do 
the following...

for that we use useLocation() Hook... with it we can know, what is the location
of that user...

we should know from which path the user is coming...
and we have to write the code for it inside of RequireAuth.jsx page...

we have to import useLocation() hook from react-router-dom...




*/
