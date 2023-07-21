import { MovieField } from "./MovieField";

export type FavMovieField = {
  favMovies: MovieField[];
  addFavMovie: (_movie: MovieField) => void;
  removeFavMovie: (_imdbid: string) => void;
};
