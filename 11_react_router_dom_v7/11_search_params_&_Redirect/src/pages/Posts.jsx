import { useLoaderData, redirect } from "react-router-dom";
import Post from "../components/Post";

export async function fetchPosts({ request }, obj) {
  // console.log(args, obj);
  // console.log("args", args);
  // console.log(request.url);

  const url = new URL(request.url);
  // console.log(url);
  const pathname = url.pathname;

  const endpoint = "https://jsonplaceholder.typicode.com/posts";

  if (!obj.isLoggedIn) {
    // return redirect(`/login?a=hello&b=world`);
    return redirect(`/login?redirectTo=${pathname}`);
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

how to get this searchParams separately ? ---> `/login?a=hello&b=world`
==>
  inside of Login.jsx---
      const url = location.search;
      const searchParams = new URLSearchParams(url);
      console.log(searchParams.get("a"));
      console.log(searchParams.get("b"));
 ---
 there is also a short way--->

 after importing useSearchParams from "react-router-dom";

  * useSearchParams() returns an array...
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("a"));
  console.log(searchParams.get("b"));

  ---

 ! and if you try to get some value which does not exist, then in the terminal you will see null...
 ! e.g. ---> console.log(searchParams.get("c"));

*/
