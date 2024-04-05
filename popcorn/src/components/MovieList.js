import { useState } from "react";
import Movie from "./Movie";

export default function MovieList({ onSelectMovie, movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie onSelectMovie={onSelectMovie} movie={movie} />
      ))}
    </ul>
  );
}
