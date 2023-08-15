"use client"

import { NextPage } from "next";
import * as React from 'react';
import { MoviesContext } from "@/context/movieData.context";

const FavouritePage: NextPage = () => {
  const { favMovies } =
    React.useContext(MoviesContext);
  return <div>
    {
      favMovies.map((movie) => {
        return <div key={movie.imdbid} className="text-2xl">{movie.title}</div>
      })
    }
  </div>;
};

export default FavouritePage;
