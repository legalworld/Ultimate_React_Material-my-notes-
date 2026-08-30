// ! Global import
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// ! Local Import
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Posts from "./pages/Posts";
// import Error from "./pages/Error";
import { Home, Contact, About, Posts, Error } from "./pages/index.js";
// we did this cause we don't want to write import that many times for each...
import RootLayout from "./layouts/RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<Posts />} />
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

ok, so now what i want to do is, we want to make a navigation bar...
now the thing is, no matter in which page you are, this
navigation bar will be visible always in every page... 

and it's also help us navigating through pages...

here a pattern is being following...

<Route>
    <Route/>
    <Route/>
</Route>

the outer route is parent and the inner route is all children...

now what i'm gonna do is, i'm gonna make a component call RootLayout,
there i'm gonna write the code which i want to share with all the children...
*/

/*

<Route> ---> parent
    <Route/>
    <Route/> ---> child
</Route>

here parent and child, both together called
nested routes...

*/

/*

<Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
</Route>,

EXPLANATION: previously for the Home Route, we have set the 
path="/", now we just written index instead...

! why ?
==> cause, before parent Route also has path forward slash(/).
and the child Home also has path="/" ...
so it's looks kinda confusing... 
that's why we use index.
it means if we come to the parent path, then the content of RootLayout will 
be visible, and Home component's content also going to be visible as well... 

*/
