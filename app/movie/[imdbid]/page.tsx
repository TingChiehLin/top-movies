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

const filterName = (names: string[]) => {
  //Challenge here to filter extra information
  //(book)
  //(story)
  //(screenplay)
  //(based on the novel by)
  //(novel)
  //(narration)
  const formatResult = names.map((name, index) => name + (`${(index !== (names.length - 1)) ? ", " : ""}`))
                    
  return formatResult;
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
    genre:genres,
    director,
    writers,
    imdbid
  } = movie as MovieField;
  const videoId = trailer.split('/embed/')[1];

  if(movie === undefined) redirect("/");

  const newGenres = filterName(genres);
  const newWriters = filterName(writers);

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
          className="w-full max-w-sm rounded-lg"
          alt={`${title} image`}
      />
        <div className="flex flex-col justify-between">
          <span className="uppercase text-3xl font-semibold text-primaryColor">{topRank}</span>
          <div className="flex flex-col gap-6">
            <span className="font-semibold">Release Date</span>
            <span className="text-slate-500">{year}</span>
            <span className="font-semibold">Director</span>
            <span className="text-slate-500">{director}</span>
            <span className="font-semibold">Genre</span>
            <div className="flex gap-2">
              {genres.map((genre) => <span key={`${imdbid}_${genre}`} className="text-slate-500">{newGenres}</span>)}
            </div> 
            <span className="font-semibold">Writer</span>    
            <span className="text-slate-500">
              {newWriters}
            </span>
          </div>
          <div className="flex gap-6">
            <Rating rank={rating}/>
            <Trailer handleModal={handleModal}/>
            <FavIcon movie={movie} imdbid={imdbid} isFavourited={isFavourited} handleAddFav={handleAddFav} handleRemoveFav={handleRemoveFav}/>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-primaryColor">Synopsis</h2>
        <p className="w-full max-w-4xl text-slate-500 mt-3">{description}</p>
      </div>
    </PageContainer>
  )
};

export default MovieDetail;
