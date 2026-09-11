import axios from "axios";
import { useSearchParams, useLoaderData } from "react-router-dom";

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
  // const [searchParams] = useSearchParams();
  const { movie, isError, error } = useLoaderData();
  if (movie && movie.Response === "false") {
    return <h1>{movie.error}</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    // <div>
    //   <h1>{showData.name}</h1>
    //   <p>
    //     <strong>Type:</strong> {showData.type}
    //   </p>
    //   <p>
    //     <strong>Status:</strong> {showData.status}
    //   </p>
    //   <p>
    //     <strong>Premiered:</strong> {showData.premiered}
    //   </p>
    //   {showData.image && (
    //     <img
    //       src={showData.image.medium}
    //       alt={showData.name}
    //       style={{ maxWidth: "300px" }}
    //     />
    //   )}
    //   <div>
    //     <strong>Summary:</strong>
    //     <p>
    //       {summary ? summary.replace(/<[^>]*>/g, "") : "No summary available"}
    //     </p>
    //   </div>
    // </div>
    <h1>{movie.name}</h1>
  );
}

export default SingleMovieDetail;
