"use client";

import { useRouter } from "next/navigation";

import { FcLike } from "react-icons/fc";

const MovieDetail = () => {
  const router = useRouter();
  console.log(router);
  return <div>MovieDetail</div>;
};

export default MovieDetail;
