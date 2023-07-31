import * as React from "react";

import { MovieField } from "@/lib/MovieField";

interface TypeProps {
  children: React.ReactNode;
}

export type FavMovieField = {
  favMovies: MovieField[];
  addFavMovie: (_movie: MovieField) => void;
  removeFavMovie: (_imdbid: string) => void;
};

const initialFavMovie:FavMovieField = {
  favMovies:[],
  addFavMovie:(_movie: MovieField) => {},
  removeFavMovie:(_imdbid: string) => {},
}

export const MoviesContext = React.createContext(initialFavMovie);

export const MovieContextProvider: React.FC<TypeProps> = ({ children }) => {
  const [favMovies, setFavMovies] = React.useState<MovieField[]>([]);

  const handleAddFavMovie = (_movie:MovieField) => {
    setFavMovies(prevMovies => [...prevMovies, _movie]);
  }

  const handleRemoveFavMovie = (_imdbid:string) => {
     setFavMovies(prevMovie => prevMovie.filter(movie => movie.imdbid !== _imdbid))
  }
  
  console.log('context favMovies',favMovies);

  return (
    <MoviesContext.Provider value={{favMovies,addFavMovie:handleAddFavMovie,removeFavMovie: handleRemoveFavMovie}}>
      {children}
    </MoviesContext.Provider>
  );
};
