import { useLoaderData, redirect } from "react-router-dom";
import Post from "../components/Post";

export async function fetchPosts({ request }, obj) {
  const url = new URL(request.url);

  const pathname = url.pathname;

  const endpoint = "https://jsonplaceholder.typicode.com/posts";

  if (!obj.isLoggedIn) {
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
