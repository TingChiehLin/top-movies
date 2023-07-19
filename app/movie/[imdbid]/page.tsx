"use client";

import * as React from "react";
import { movieField } from "@/lib/MovieField";
import { FcLike } from "react-icons/fc";

import movieData from "../../../lib/top_100_movies.json";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: React.FC<PropType> = ({ params }) => {
  const [fliteredMovie, setFliteredMovie] = React.useState(null);
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
  } = newMovie as movieField;
  return <div>{title}</div>;
};

export default MovieDetail;
