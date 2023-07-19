import * as React from "react";

export const MoviesContext = React.createContext({} as any);

//1.favourite movies array
//2.addFavouritedMovie
//3.removeFavouritedMovie

interface TypeProps {
  children: React.ReactNode;
}

export const MovieContextProvider: React.FC<TypeProps> = ({ children }) => {
  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};
