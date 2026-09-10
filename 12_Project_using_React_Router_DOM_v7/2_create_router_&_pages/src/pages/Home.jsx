import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

export function loader({ request }) {
  // console.log(request.url);
  // console.log(args);

  // ! ---------------------------------------
  // vanila js syntax, the below one.
  const url = new URL(request.url);
  // console.log(url);
  const searchTerm = url.searchParams.get("search");
  console.log(searchTerm);

  // * now with this above code, i have figuredOut, what user trying to search...
  // ! ---------------------------------------
  return null;
}

function Home() {
  return (
    <div>
      <SearchForm />
      <MovieList />
    </div>
  );
}

export default Home;
