"use client";

import * as React from "react";
import {redirect} from 'next/navigation';
import { NextPage } from "next";

import { MovieField } from "@/lib/movieField";
import { MoviesContext } from "@/context/movieData.context";
import movieData from "../../../lib/top_100_movies.json";

import PageContainer from "@/layouts/PageContainer";
import Modal from "@/components/Modal";
import VideoPlayer from "@/components/VideoPlayer";
import Trailer from "@/components/Trailer";
import FavIcon from "@/components/FavIcon";
import Rating from "@/components/Rating";
import Image from "next/image";

interface PropType {
  params: {
    imdbid: string;
  };
}

const MovieDetail: NextPage<PropType> = ({ params }) => {
  const [isFavourited, setIsFavourited] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const {favMovies, addFavMovie, removeFavMovie} = React.useContext(MoviesContext);
  const movie = movieData.find((movie) => movie.imdbid === params.imdbid);
  
  const {
    title,
    rating,
    id:topRank,
    year,
    image: imgURL,
    description,
    trailer,
    genre,
    director,
    writers,
    imdbid
  } = movie as MovieField;
  const videoId = trailer.split('/embed/')[1];

  if(movie === undefined) redirect("/");

  const newGenre = genre;
  const newWriter = writers.join('').replace(" (screenplay by)","");
  console.log(newWriter);

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

  const handleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  return(
    <PageContainer title={title}>
      {isOpenModal && 
                      <Modal isOpenModal={isOpenModal} handleCancel={handleModal}>                               
                          <VideoPlayer videoId={videoId}/> 
                      </Modal>
      }
      <div className="flex gap-16">
       <Image
          src={imgURL}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full max-w-xs rounded-lg"
          alt={`${title} image`}
      />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <span className="uppercase text-xl font-semibold">{topRank}</span>
              <Rating rank={rating}/>
            </div>
            <span className="font-semibold">Release Date</span>
            <span className="text-slate-600">{year}</span>
            <span className="font-semibold">Director</span>
            <span className="text-slate-600">{director}</span>
            <span className="font-semibold">Genre</span>
            <div className="flex gap-2">
              {newGenre.map((genre, index) => <span key={`${imdbid}_${genre}`} className="text-slate-600">{genre + (`${index !== (newGenre.length - 1) && ","}`)}</span>)}
            </div> 
            <span className="font-semibold">Writer</span>
            <p className="text-slate-600">{writers}</p>
          </div>
          <div className="flex gap-4">
            <Trailer handleModal={handleModal}/>
            <FavIcon movie={movie} imdbid={imdbid} isFavourited={isFavourited} handleAddFav={handleAddFav} handleRemoveFav={handleRemoveFav}/>
          </div>
        </div>
      </div>
      {/* 48 */}
      <p className="w-full max-w-3xl mt-6 text-slate-600">{description}</p>
    </PageContainer>
  )
};

export default MovieDetail;
