import { useLoaderData, redirect } from "react-router-dom";
import Post from "../components/Post";

export async function fetchPosts(args, obj) {
  console.log(args, obj);

  // ! ---
  // const { isLoggedIn } = useAuth();
  // if (!isLoggedIn) {
  //   console.log("is not logged in");
  // }
  // ! ---
  const endpoint = "https://jsonplaceholder.typicode.com/posts";

  // ! ---
  // if user is not loggedIn then re-direct to login page...
  // now another question you might be having is how do i check
  // in the loader function that whether a user is loggedIn or not ???
  // * check the note.md
  // ! ---

  if (!obj.isLoggedIn) {
    return redirect("/login");
  }

  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data;
}

function Posts() {
  const posts = useLoaderData();

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

we need data in the loader function...
and we know that loader function does give us data through parameters...
e.g.---> args
if you print it it will show you a object in the console...
but we don't need the entire object, 
we need the isLoggedIn state...
basically we need to call the loader function in a place,
where the value of isLoggedIn is accessable.

if you see the App.jsx...
you will notice the router was first outside the app component,
but now i place it inside of the App component...
that's a trick...

so as we were discussing, if user is loggedOut, then the JWT token will not be store inside browser's 
localStorage or sessionStorage or cookies... cause the app will not send any req.

but now, in our dummy application,we gonna try a auth tecnic so no network req will occur.


* now the question is, why we place the router inside of the App component...?
==>
* because inside of App, we can use useAuth().
  
! now thing about one thing, can i use useAuth inside of App component ?
==>
the value of context goes from where to where ???
=> the places where i have used authProvider.
i can use it to all the children of App component. but the authProvider
is not wrapped around App component, so we can't use 
useAuth() for App component... 
so we gonna do it, we gonna wrap it.
inside of main.jsx---
---> <AuthProvider></AuthProvider>

---

when i will call the loader function, i want the args, but also i want the state of whether 
the user is loggedIn or not ???
==>
so i will pass a obj parameter also...  

now if you see the code, the loader function is now the 
arrow function, and it's getting the args as usual, so we are receiving the args from the loader function and 
passing it to the new loader function which is the arrow function... and from loader function
we always have to return stuff. and now when calling 
we are doing this --->   
* return fetchPosts(args, { isLoggedIn: isLoggedIn });

now we can check if user is loggedIn or not via
this code---> 

if (!obj.isLoggedIn) {
    return redirect("/login");
  } 

*/
