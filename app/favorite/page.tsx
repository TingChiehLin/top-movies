"use client"

import { NextPage } from "next";
import * as React from 'react';
import { MoviesContext } from "@/context/movieData.context";
import { FcLike } from "react-icons/fc";
import { FavMovieField } from "@/lib/FavMovieField";

const FavouritePage: NextPage = () => {
  const { favMovArray, addFavMovie, removeFavMovie }: FavMovieField =
    React.useContext(MoviesContext);
    console.log('favMovArray:',favMovArray)
  return <div></div>;
};

export default FavouritePage;
