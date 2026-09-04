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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*

sometimes what happen is, we want to show some specific
page to some specific user... like someone who is
logged in . that's where protected routes comes into
the picture...

right now, we not gonna talk about real auth system... like 
how we gonna deal with that !!!

but we can make a fake auth system, so we can learn to work with
protected routes...

let's say i want to make this route protected--->
    <Route path="posts" element={<Posts />} />

i want nobody to be able to visit this route except logged in ones...    

STEPS:--->
1) first you have to make a component, where you gonna write the logic of identifying whether the
user is logged in or not ...

2) and then you gonna wrap the Posts component around that component...
*/

/*
<Route
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
/>

---> from looking at it, you can easily tell,
Posts component has become a children of RequireAuth component...

so i can accept the children, in the RequireAuth component... 

we need to show the posts when user is loggedIn...

*/
