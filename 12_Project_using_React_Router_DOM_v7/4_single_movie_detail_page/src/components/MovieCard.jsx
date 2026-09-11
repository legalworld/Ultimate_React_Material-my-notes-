import { Link } from "react-router-dom";
function MovieCard({ show }) {
  const { name, id, type, image, premiered, summary } = show;
  return (
    <Link to={`/detail/${id}?summary=${encodeURIComponent(summary || "")}`}>
      <p>{name}</p>
    </Link>
  );
}

export default MovieCard;
