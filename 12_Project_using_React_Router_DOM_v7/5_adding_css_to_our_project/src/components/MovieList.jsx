import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ movies = [], isError = false, error = null }) {
  // Check if there was an error
  if (isError && error) {
    return (
      <div
        style={{
          color: "red",
          padding: "10px",
          backgroundColor: "#ffe0e0",
          borderRadius: "4px",
          margin: "10px 0",
        }}
      >
        <strong>Error:</strong> {error}
      </div>
    );
  }

  // Check if no movies found
  if (movies.length === 0) {
    return (
      <div style={{ padding: "10px", textAlign: "center" }}>
        No movies found. Try searching for something!
      </div>
    );
  }

  return (
    <div className={`container ${styles.moviesList}`}>
      {/* <h2>Search Results</h2> */}

      {movies.map((item) => (
        <MovieCard key={item.show.id} {...item} />
      ))}
    </div>
  );
}

export default MovieList;
