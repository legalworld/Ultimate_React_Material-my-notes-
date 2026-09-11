import axios from "axios";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import { useLoaderData, useNavigation } from "react-router-dom";
import { baseUrl } from "../constants";

export async function loader({ request }) {
  const url = new URL(request.url);
  let searchTerm = url.searchParams.get("search"); // if there is no search term, then it will give us null. but to avoid null, we error handled it below, and you can see it...

  console.log("🔍 Loader called - URL:", request.url);
  console.log("🔍 Search term from URL:", searchTerm);

  // If no search term, use "one piece" as default
  if (!searchTerm) {
    searchTerm = "one piece";
    console.log("🔍 No search term found, using default: 'one piece'");
  }

  try {
    const movieSearchEndpoint = `${baseUrl}/search/shows?q=${searchTerm}`;
    // const movieSearchEndpoint = `https://api.tvmaze.com/shows/search/shows?q=${searchTerm}`;

    // TO TEST ERROR: Uncomment the line below to test catch block
    // throw new Error("Test error - intentional failure for testing");

    const response = await axios.get(movieSearchEndpoint);
    console.log(
      "✅ Success:",
      response.data.length,
      "shows found for",
      searchTerm,
    );
    console.log(response.data);

    return {
      searchTerm: searchTerm,
      movies: response.data,
      isError: false,
      error: null,
    };
  } catch (error) {
    console.error("❌ Error fetching movies:", error.message);

    // Better error handling - get detailed error message
    const errorMessage =
      error?.response?.status === 404
        ? `No shows found for "${searchTerm}". Try a different search.`
        : error?.response?.data?.message ||
          error.message ||
          "Failed to fetch movies. Please check your internet connection.";

    return {
      searchTerm: searchTerm,
      movies: [],
      isError: true,
      error: errorMessage,
    };
  }
}

function Home() {
  const { searchTerm, movies, isError, error } = useLoaderData();
  const navigation = useNavigation();

  console.log("🏠 Home component rendered");
  console.log("📦 Loader data received:", {
    searchTerm,
    moviesCount: movies?.length,
    isError,
  });
  console.log("⏳ Navigation state:", navigation.state);

  // Show loading state while data is being fetched
  if (navigation.state === "loading") {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        ⏳ Loading movies...
      </div>
    );
  }

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />

      {/* Pass error info to MovieList so it handles all the messaging */}
      <MovieList movies={movies} isError={isError} error={error} />
    </div>
  );
}

export default Home;

/*
in the Home component i have founded that what user wants to search...

what back-end developers basically do is, they give us response in case of error also...
so, we can read the error and show the user a clean error msg... 

so basically you can see, we are using try and catch block here...
and when working with axios, this gives us leverage...
when working with fetch we basically have to write code like
 --> if (res.ok) then something or if(res.status <= 200) then something...
 but when working with axios you can directly show the error msg inside of the catch block...

*/
