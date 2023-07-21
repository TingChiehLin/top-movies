import { MovieField } from "./MovieField";

export type FavMovieField = {
  favMovies: MovieField[];
  addFavMovie: (movie: MovieField) => void;
  removeFavMovie: (movie: MovieField) => void;
};
