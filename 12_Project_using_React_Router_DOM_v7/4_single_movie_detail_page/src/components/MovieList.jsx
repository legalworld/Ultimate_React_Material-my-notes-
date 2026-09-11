import React from "react";
import MovieCard from "./MovieCard";

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
    <div>
      <h2>Search Results</h2>
      <div className="movie-list">
        {movies.map((item) => (
          <MovieCard key={item.show.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

/*


{movies.map((item) => (
          <div key={item.show.id} className="movie-item">
            <h3>{item.show.name}</h3>
            <p>
              {item.show.summary
                ? item.show.summary.replace(/<[^>]*>/g, "")
                : "No summary available"}
            </p>
            {item.show.image && (
              <img src={item.show.image.medium} alt={item.show.name} />
            )}
          </div>
        ))}






*/
