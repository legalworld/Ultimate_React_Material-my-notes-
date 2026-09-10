// ! global imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//! local imports
import { baseUrl } from "./constants";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

function App() {
  // console.log(baseUrl);

  return <RouterProvider router={router} />;
}

export default App;

/*

j kono api k, use ki vabe kore ?
==> if you are working in a particular company, backend developes will give
you api... 
the best way to use, any API key is to see it's doc & examples...

! BASE URL: // https://api.tvmaze.com/shows


*/
