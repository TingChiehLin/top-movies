import { FC } from "react";
import Image from "next/image";

import { HiMiniStar } from "react-icons/hi2";

interface MovieItemTypeProp {
  id?: string;
  title?: string;
  rating?: string;
}

const MovieItem: FC<MovieItemTypeProp> = ({ id, title, rating }) => {
  const url = "https://picsum.photos/800/600";
  if (url === null) return;
  return (
    <div>
      <div className="relative transition duration-300 ease-out hover:scale-105">
        <Image
          src={url}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto cursor-pointer rounded-lg"
          alt={""}
        />
        <div className="flex item-center gap-1 mt-1.5 absolute top-0 right-2">
          <HiMiniStar size={"1.5rem"} className="text-yellow-400" />
          <span className="text-white">10</span>
        </div>
      </div>
      <span className="font-bold mt-3 block">The Dark Knight</span>
    </div>
  );
};

export default MovieItem;
