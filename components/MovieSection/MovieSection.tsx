import { FC } from "react";
import MovieItem from "../MovieItem";

import { MovieField } from "@/lib/movieField";

interface MovieSectionPropType {
  movieData: MovieField[];
}

const MovieSection: FC<MovieSectionPropType> = ({ movieData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-32">
      {movieData.map((movie) => {
        return (
          <MovieItem
            key={movie.imdbid}
            imdbid={movie.imdbid}
            title={movie.title}
            imgURL={movie.image}
            rating={movie.rating}
          />
        );
      })}
    </div>
  );
};

export default MovieSection;
