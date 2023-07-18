import * as React from "react";

import movieData from "../lib/top_100_movies.json";

import { movieField } from "@/lib/movieField";

export const movieDataContext = React.createContext(movieData as movieField[]);

interface TypeProps {
  children: React.ReactNode;
}

export const MovieContextProvider: React.FC<TypeProps> = ({ children }) => {
  return (
    <movieDataContext.Provider value={movieData}>
      {children}
    </movieDataContext.Provider>
  );
};
