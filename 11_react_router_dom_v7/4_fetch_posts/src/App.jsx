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
} from "./pages/index.js";
import RootLayout from "./layouts/RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:id" element={<PostDetail />} />
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
 path="posts/:id" ---> that's a variable path...
 no matter, what is after post, 123 or abc or xyz... this route
 will match everything...

---
      <Route path="posts/:id" element={<PostDetail />} />
 
  after this line, if you click on the individual posts, you will be in the 
  PostDetail page everytime...  
  but the url will be ---> posts/1 or posts/2
  depending on which post you have clicked on...   
      
! now if you write--> posts/gkjhgb
! anything gibbrish, then also the PostDetail page will be
! open.

* it's a path variable. the name of the variables here is id... we 
* have made a variable name id in the url...
* 
* if i write --> http://localhost:5173/posts/1
* then value of path variable id is 1
* if i write --> http://localhost:5173/posts/2
* then value of path variable id is 2
* if i write --> http://localhost:5173/posts/abc
* then value of path variable id is abc

! but, how to get the value of id ? that's the main question !!!
==>
so you have to use useParams() hook in PostDetail page...

* Important: useParams() returns URL parameters as strings, so if you need a number, convert it:

const postId = Number(id);

General pattern
Route
  ↓
/posts/:id
  ↓
URL: /posts/25
  ↓
:id = "25"
  ↓
useParams()
  ↓
{ id: "25" }

---

we are getting the id, now we have to use it to do fetch req...

*/
