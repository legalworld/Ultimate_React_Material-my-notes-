import { useState, useEffect } from "react";
import Post from "../components/Post";
const endpoint = "https://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    const res = await fetch(endpoint);
    const data = await res.json();
    setPosts(data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
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
