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
        className="relative block transition duration-300 ease-out hover:scale-105 max-w-sm"
      >
        <Image
          src={imgURL}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full cursor-pointer rounded-lg"
          alt={imdbid}
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-out hover:opacity-30"></div> */}
        <div className="flex item-center gap-1 mt-1.5 absolute top-1 right-2">
          <HiMiniStar size={"1.5rem"} className="text-yellow-400" />
          <span className="text-white">{rating}</span>
        </div>
      </Link>
      <span className="font-bold mt-3 block">{title}</span>
    </div>
  );
};

export default MovieItem;
