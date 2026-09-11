import axios from "axios";
import { useSearchParams, useLoaderData } from "react-router-dom";
import styles from "./SingleMovieDetail.module.css";

export async function loader({ params }) {
  const tvMazeId = params.id;
  const URL = `https://api.tvmaze.com/shows/${tvMazeId}`;

  try {
    const response = await axios.get(URL);
    // return response.data;
    // console.log(response);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.status === 404
        ? `No shows found for "${searchTerm}". Try a different search.`
        : error?.response?.data?.message ||
          error.message ||
          "Failed to fetch movies. Please check your internet connection.";

    return {
      movie: null,
      isError: true,
      error: errorMessage,
    };
  }
}

function SingleMovieDetail() {
  const [searchParams] = useSearchParams();
  const { movie, isError, error } = useLoaderData();
  const summary = searchParams.get("summary");

  if (!movie || isError) {
    return <h1>{error || "Loading..."}</h1>;
  }

  return (
    <div className={`container ${styles.movieDetail}`}>
      <div className={styles.infoOnLeft}>
        <h2>{movie.name}</h2>
        <img src={movie.image?.medium} alt={movie.name} />

        <p className={styles.infoPara}>
          <span className={styles.key}>Premiered </span>
          <span className={styles.value}>{movie.premiered}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Genre </span>
          <span className={styles.value}>
            {movie.genres?.join(", ") || "N/A"}
          </span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Runtime </span>
          <span className={styles.value}>{movie.runtime} mins</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Language </span>
          <span className={styles.value}>{movie.language}</span>
        </p>

        <p className={styles.infoPara}>
          <span className={styles.key}>Status </span>
          <span className={styles.value}>{movie.status}</span>
        </p>
      </div>
      <div className={styles.infoOnright}>
        <div className="plot">
          <div className={styles.bigInfo}>
            <h3>Summary</h3>
            <p>
              {summary
                ? summary.replace(/<[^>]*>/g, "")
                : "No summary available"}
            </p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Type</h3>
            <p>{movie.type}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Country</h3>
            <p>{movie.network?.country?.name || "N/A"}</p>
          </div>
          <h2>More Info</h2>
          <p className={styles.infoPara}>
            <span className={styles.key}>Network </span>
            <span className={styles.value}>{movie.network?.name || "N/A"}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Rating </span>
            <span className={styles.value}>
              {movie.rating?.average || "N/A"}
            </span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Ended </span>
            <span className={styles.value}>{movie.ended || "Ongoing"}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Official Site </span>
            <span className={styles.value}>
              {movie.officialSite ? (
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              ) : (
                "N/A"
              )}
            </span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Genres</span>
            <span className={styles.value}>
              {movie.genres?.join(", ") || "N/A"}
            </span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>TVMaze URL</span>
            <span className={styles.value}>
              <a href={movie.url} target="_blank" rel="noopener noreferrer">
                View on TVMaze
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
