import { FC } from "react";
import Image from "next/image";

import { HiMiniStar } from "react-icons/hi2";
import Link from "next/link";

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
      <Link
        href={`/movie/${imdbid}`}
        className="relative block transition duration-300 ease-out hover:scale-105 max-w-sm md:max-w-xs"
      >
        <Image
          src={imgURL}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full cursor-pointer rounded-lg"
          alt={title}
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="flex item-center gap-1.5 absolute top-2 right-2">
          <HiMiniStar size={"1.5rem"} className="text-yellow-400" />
          <span className="text-white -mt-1">{rating}</span>
        </div>
      </Link>
      <span className="font-medium mt-4 block text-xl">{title}</span>
    </div>
  );
};

export default MovieItem;
