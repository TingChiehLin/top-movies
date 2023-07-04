import { FC } from "react";
import Image from "next/image";

import { HiMiniStar } from "react-icons/hi2";

interface MovieItemTypeProp {
  title?: string;
  rating?: string;
}

const MovieItem: FC<MovieItemTypeProp> = ({ title, rating }) => {
  const url = "https://picsum.photos/800/600";
  if (url === null) return;
  return (
    <div className="cursor-pointer">
      <Image
        src={url}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        alt={""}
      />
      <div className="">
        <span>10</span>
      </div>
      <span className="font-bold">The Dark Knight</span>
    </div>
  );
};

export default MovieItem;
