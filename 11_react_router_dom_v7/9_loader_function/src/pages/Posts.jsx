import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

// * React Router v6.4+ / v7 style (note.md)
// loader function
// Form
// actions

// ! some people name this function as loader for convension.
export async function fetchPosts() {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data;
}

function Posts() {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <>
      {posts &&
        posts.map((post) => {
          return <Post id={post.id} title={post.title} key={post.id} />;
        })}
    </>
  );
}

export default Posts;

/*
with useEffect(), what happens ?
==>
first component gets mount, and then fetch() function happens...


but, if we use loader, then our data gets fetch first and then our component get mounted...

* how to use loader ?
* step 1)--->  provide loader function to route. and we defined the routes to App.jsx, so we gonna write the loader there...
* from loader function, you have to return something, otherwise you will get error... 
 
* step 2)---> useLoaderData() and get data .



*/

/*

now, how to handle errors, when you are working with loader function...
! let's say the endPoint is wrong...

if (!res.ok) {
  throw new Error("Something went wrong...");
}


*/
