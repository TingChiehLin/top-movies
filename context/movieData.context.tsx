import * as React from "react";

import { MovieField } from "@/lib/MovieField";
import { FavMovieField } from "@/lib/FavMovieField";

interface TypeProps {
  children: React.ReactNode;
}

const initialFavMovie:FavMovieField = {
  favMovies:[],
  addFavMovie:(movie: MovieField) => {},
  removeFavMovie:(movie: MovieField) => {},
}

export const MoviesContext = React.createContext(initialFavMovie);

export const MovieContextProvider: React.FC<TypeProps> = ({ children }) => {
  const [favMovies, setFavMovies] = React.useState<MovieField[]>([]);

  const handleAddFavMovie = (movie:MovieField) => {
    setFavMovies([...favMovies, movie])
  }

  const handleRemoveFavMovie = (movie:MovieField) => {
    //setFavMovies()
  }

  return (
    <MoviesContext.Provider value={{favMovies,addFavMovie:handleAddFavMovie,removeFavMovie: handleRemoveFavMovie}}>
      {children}
    </MoviesContext.Provider>
  );
};
