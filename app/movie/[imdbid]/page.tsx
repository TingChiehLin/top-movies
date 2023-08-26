"use client";

import * as React from "react";
import {redirect} from 'next/navigation';
import { NextPage } from "next";

import { MovieField } from "@/lib/movieField";
import {HiMiniHeart,HiOutlineHeart } from "react-icons/hi2";
import { MoviesContext } from "@/context/movieData.context";
import movieData from "../../../lib/top_100_movies.json";

import PageContainer from "@/layouts/PageContainer";
import Modal from "@/components/Modal";
import VideoPlayer from "@/components/VideoPlayer";
import Trailer from "@/components/Trailer";
import FavIcon from "@/components/FavIcon";

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
    id,
    year,
    image,
    description,
    trailer,
    genre,
    director,
    writers,
    imdbid
  } = movie as MovieField;
  const videoId = trailer.split('/embed/')[1];

  if(movie === undefined) redirect("/");

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
      <Trailer handleModal={handleModal}/>
      <FavIcon movie={movie} imdbid={imdbid} isFavourited={isFavourited} handleAddFav={handleAddFav} handleRemoveFav={handleRemoveFav}/>
    </PageContainer>
  )
};

export default MovieDetail;
