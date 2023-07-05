import { FC } from "react";
import Image from "next/image";

import { HiMiniStar } from "react-icons/hi2";

interface MovieItemTypeProp {
  imdbid: string;
  title: string;
  imgURL: string;
  rating: string;
}

const MovieItem: FC<MovieItemTypeProp> = ({
  imdbid,
  title,
  imgURL,
  rating,
}) => {
  if (imgURL === null) return;
  return (
    <div>
      <div className="relative transition duration-300 ease-out hover:scale-105">
        <Image
          src={imgURL}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full cursor-pointer rounded-lg"
          alt={imdbid}
        />
        <div className="flex item-center gap-1 mt-1.5 absolute top-0 right-2">
          <HiMiniStar size={"1.5rem"} className="text-yellow-400" />
          <span className="text-white">{rating}</span>
        </div>
      </div>
      <span className="font-bold mt-3 block">{title}</span>
    </div>
  );
};

export default MovieItem;
