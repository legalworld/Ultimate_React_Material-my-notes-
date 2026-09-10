// ! global imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//! local imports
import { baseUrl } from "./constants";

// * pages import
import Home from "./pages/Home";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import Root from "./pages/Root";
import Error from "./pages/Error";

// * loaders import
import { loader as MovieLoader } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route path="/detail/:id" element={<SingleMovieDetail />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
you can think of pages as, how many of routes you will have... 

right now, i'm feeling there going to be two pages...

*/

/*

in the home page, what we gonna have is, we gonna have a form and a list of movies...
you can think it like, i'm breaking my home page in 2 halfs... 

* above is search component.
* and below is movie list component...

*/
