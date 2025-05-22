import React from "react";
import { getAllMovies } from "../../data/movie.js";
import { getImgUrl } from "../../utils/movieUtils.js";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
