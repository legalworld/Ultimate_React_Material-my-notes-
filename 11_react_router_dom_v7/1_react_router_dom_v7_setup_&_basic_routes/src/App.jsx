import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="/posts" element={<h1>Posts Page</h1>} />
      <Route path="*" element={<h1>Error Page</h1>} />
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

some stuffs you have to remember while working with react-router-dom...

! step: 1 

* you have to import 4 things...
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

! step: 2

* create router

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>))

! step: 3

inside of <Route></Route>, we can make <Route><Route path="/" element={<h1>Home Page</h1>}/></Route>

! step: 4

we have to return it inside of JSX...
like this ---> return (
    <div>
      <RouterProvider router={router} />
    </div>
  );


when you visit the routes, it will take you there...
but lets say you visit any random route which is not set, then it will take you to the error route page...
that's why the asterisk(*) route i created...

* Unexpected Application Error!
* 404 Not Found
* although, we can provide a way better UX than this when our app throws errors by providing our own ErrorBoundary or errorElement prop on your route. 


so, this is the syntax for creating routes...
we gonna change some little things in it when we provide element in parent route....

the RouterProvider we are returning in the App component's JSX...
we can return it anywhere in the application... 

*/

// ----------------------------------------------------------------------------------------

// what is Routing ???
// ==>
// we have different different pages like home, about, contact etc... basically we are making pages here...
// forward slash(/) means home page...

// ----------------------------------------------------------------------------------------------

/*

Yes — **your understanding is mostly correct**, but I would make a few important corrections.

### Your statement, corrected

**React Router DOM is a separate library. It does not come with React.**

The team/company behind **Remix** also created **React Router**.

Remix was built around React and introduced several ideas for handling routing, data loading, forms, server-side rendering, mutations, etc.

Over time, many of the ideas and APIs from Remix were brought into **React Router**, especially with **React Router v7**, which evolved React Router into a framework that can be used for full-stack applications.

So, you can think of the relationship roughly like this:

**React → UI library**

**React Router → routing library**

**Remix → React-based full-stack framework**

**React Router v7 → React Router evolved with many Remix-inspired/Remix-derived framework capabilities**

### One subtle but important point

Don't think of it as:

> **"Remix was built first, and then React Router v7 copied Remix."**

The history is more intertwined than that.

The **Remix team took React Router and developed Remix around it**, and later the capabilities developed in Remix were brought back into the React Router ecosystem. That's why you'll see React Router v7 described as having **Remix's ideas/capabilities integrated into React Router**.

So your mental model should be:

```text
React
  │
  ├── React Router ───────────────┐
  │                               │
  │                         Remix develops
  │                         advanced patterns
  │                               │
  └───────────────────────────────┤
                                  ↓
                         React Router v7
                    (framework capabilities)
```

And yes: **`react-router-dom` is not part of React itself**. You install it separately.


*/
