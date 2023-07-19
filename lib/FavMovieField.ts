import { MovieField } from "./MovieField";

export type FavMovieField = {
  favMovArray: MovieField[];
  addFavMovie: () => void;
  removeFavMovie: () => void;
};
