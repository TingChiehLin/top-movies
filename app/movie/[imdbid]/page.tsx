"use client";

import * as React from "react";
import { MoviesContext } from "@/context/movieData.context";
import { MovieField } from "@/lib/MovieField";
import {HiMiniHeart,HiOutlineHeart,HiMiniStar,HiOutlineStar } from "react-icons/hi2";

import movieData from "../../../lib/top_100_movies.json";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: React.FC<PropType> = ({ params }) => {
  const [fliteredMovie, setFliteredMovie] = React.useState(null);
  const [isFavourited, setIsFavourited] = React.useState(false);
  const {addFavMovie, removeFavMovie} = React.useContext(MoviesContext);
  const newMovie = movieData.find((movie) => movie.imdbid === params.imdbid);
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
  } = newMovie as MovieField;
  const handleAddFav = (newMovie: MovieField) => {
    addFavMovie();
    setIsFavourited(true)
  }
  const handleRemoveFav = (newMovie: MovieField) => {
    removeFavMovie();
    setIsFavourited(false)
  }
  return( 
    <div>
      <h1 className="text-4xl">{title}</h1>
      <div className="flex items-center gap-2">
      <span className="text-sm">SAVED TO WISHLIST</span>
      {isFavourited ?  <HiMiniHeart className="cursor-pointer" size={'2rem'} onClick={handleAddFav} color="red"/> : <HiOutlineHeart className="cursor-pointer" size={'2rem'} onClick={handleRemoveFav}/>}
      </div>
    </div>);
};

export default MovieDetail;
