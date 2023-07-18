"use client";

import * as React from "react";
import { movieDataContext } from "@/context/movieData.context";
import { FcLike } from "react-icons/fc";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: React.FC<PropType> = ({ params }) => {
  const movieData = React.useContext(movieDataContext);
  console.log("movieData:", movieData);
  return <div>MovieDetail</div>;
};

export default MovieDetail;
