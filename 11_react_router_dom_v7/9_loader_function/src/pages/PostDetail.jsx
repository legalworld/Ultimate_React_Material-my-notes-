import { useLoaderData } from "react-router-dom";

export async function loader(args) {
  // console.log(args);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(`${url}/${args.params.id}`);
  const data = await res.json();
  return data;
}

function PostDetail() {
  const post = useLoaderData();

  return (
    <>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}

export default PostDetail;
