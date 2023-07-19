import * as React from "react";

import { MovieField } from "@/lib/MovieField";
import { FavMovieField } from "@/lib/FavMovieField";

interface TypeProps {
  children: React.ReactNode;
}

const initialFavData: FavMovieField = {
  favMovArray: [],
  addFavMovie: () => {},
  removeFavMovie: () => {},
};

export const MoviesContext = React.createContext(initialFavData);

export const MovieContextProvider: React.FC<TypeProps> = ({ children }) => {
  return (
    <MoviesContext.Provider value={initialFavData}>
      {children}
    </MoviesContext.Provider>
  );
};
