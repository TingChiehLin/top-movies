"use client";

import * as React from "react";
import {redirect} from 'next/navigation';
import { MovieField } from "@/lib/movieField";
import {HiMiniHeart,HiOutlineHeart } from "react-icons/hi2";
import { MoviesContext } from "@/context/movieData.context";
import movieData from "../../../lib/top_100_movies.json";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: React.FC<PropType> = ({ params }) => {
  const [isFavourited, setIsFavourited] = React.useState(false);
  const {favMovies, addFavMovie, removeFavMovie} = React.useContext(MoviesContext);
  const movie = movieData.find((movie) => movie.imdbid === params.imdbid);
  if(movie === undefined) redirect("/");
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

  React.useEffect(() => {
    const favMovie = favMovies.find((favMovie) => favMovie.imdbid === params.imdbid)
    if(favMovie) {
      setIsFavourited(true)
    } else {
      setIsFavourited(false)
    }
  }, [favMovies, params.imdbid])

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
      <span className="text-sm uppercase">save to favourite list</span>
      {isFavourited ?  <HiMiniHeart className="cursor-pointer" size={'2.2rem'} onClick={() => handleRemoveFav(imdbid)} color="red"/> : <HiOutlineHeart className="cursor-pointer" size={'2.2rem'} onClick={() => handleAddFav(movie as MovieField)}/>}
      </div>
    </div>);
};

export default MovieDetail;
