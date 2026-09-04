import { Link } from "react-router-dom";
function Post({ id, title }) {
  return (
    <Link to={id.toString()}>
      <div
        style={{ padding: "1rem", margin: "1rem", border: "2px solid #232323" }}
      >
        <h2>{title}</h2>
        <p>id: {id}</p>
      </div>
    </Link>
  );
}

export default Post;
