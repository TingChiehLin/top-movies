"use client"

import { NextPage } from "next";
import * as React from 'react';
import { MoviesContext } from "@/context/movieData.context";
import { FavMovieField } from "@/lib/FavMovieField";

const FavouritePage: NextPage = () => {
  const { favMovies }: FavMovieField =
    React.useContext(MoviesContext);
    console.log('favMovArray:',favMovies);
  return <div></div>;
};

export default FavouritePage;
