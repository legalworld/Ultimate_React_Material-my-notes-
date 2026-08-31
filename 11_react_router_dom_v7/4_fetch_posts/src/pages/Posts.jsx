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

/*
till now how we fetched data ???
==>
first we mount the component.
then we fetch the data...  


later, we gonna learn, first fetch the data, then mount the page...

but. right now we gonna learn, mount then data fetch...  
and for that we are using useEffect()

*/

// empty dependency array in the useEffect, so the data fetching happens only once...
