"use client";

import { FC } from "react";
import { FcLike } from "react-icons/fc";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: FC<PropType> = ({ params }) => {
  console.log(params.imdbid);
  return <div>MovieDetail</div>;
};

export default MovieDetail;
