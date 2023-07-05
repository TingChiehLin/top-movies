import { FC } from "react";
import MovieItem from "../MovieItem";

type movieField = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
};

interface MovieSectionPropType {
  movieData: movieField[];
}

const MovieSection: FC<MovieSectionPropType> = ({ movieData }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
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
