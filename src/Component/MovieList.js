import React from "react";
import './custom.css';
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesList }) => {
    return (
      <div className="px-6">
        <h1 className="text-xl md:text-3xl py-5 text-white">{title}</h1>
        <div className="flex overflow-auto">
          <div className="flex ">
            {moviesList?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default MovieList;
