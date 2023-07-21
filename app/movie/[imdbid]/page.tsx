"use client";

import * as React from "react";
import { MovieField } from "@/lib/MovieField";
import {HiMiniHeart,HiOutlineHeart,HiMiniStar,HiOutlineStar } from "react-icons/hi2";
import { MoviesContext } from "@/context/movieData.context";
import movieData from "../../../lib/top_100_movies.json";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: React.FC<PropType> = ({ params }) => {
  const [isFavourited, setIsFavourited] = React.useState(false);
  const {addFavMovie, removeFavMovie} = React.useContext(MoviesContext);
  const movie = movieData.find((movie) => movie.imdbid === params.imdbid);
  const {
    title,
    rating,
    id,
    year,
    image,
    description,
    trailer,
    genre,
    director,
    writers,
    imdbid
  } = movie as MovieField;

  const handleAddFav = (_movie: MovieField) => {
    addFavMovie(_movie);
    setIsFavourited(true)
  }
  const handleRemoveFav = (_imdbid: string) => {
    removeFavMovie(_imdbid);
    setIsFavourited(false)
  }
  return( 
    <div>
      <h1 className="text-4xl">{title}</h1>
      <div className="flex items-center gap-2">
      <span className="text-sm">SAVED TO WISHLIST</span>
      {isFavourited ?  <HiMiniHeart className="cursor-pointer" size={'2.2rem'} onClick={() => handleRemoveFav(imdbid)} color="red"/> : <HiOutlineHeart className="cursor-pointer" size={'2.2rem'} onClick={() => handleAddFav(movie as MovieField)}/>}
      </div>
    </div>);
};

export default MovieDetail;
