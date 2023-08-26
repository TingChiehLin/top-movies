import React from 'react';
import Image from "next/image";
import { redirect } from 'next/navigation';
import { FC } from "react";
import Link from 'next/link';
import { MovieField } from '@/lib/movieField';

import { MoviesContext } from "@/context/movieData.context";
import movieData from "@/lib/top_100_movies.json";

import VideoPlayer from '../VideoPlayer';
import Modal from '../Modal';
import Trailer from '../Trailer';
import FavIcon from '../FavIcon';
import Rating from '../Rating';

interface MovieCardPropType {
    imdbid: string,
    imgURL: string,
    rating: string,
    title: string,
    trailer: string
}

const FavMovie:FC<MovieCardPropType> = ({...props}) => {
    const [isFavourited, setIsFavourited] = React.useState(false);
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const {favMovies, addFavMovie, removeFavMovie} = React.useContext(MoviesContext);
    const {imdbid,imgURL, rating, title, trailer} = props;
    const movie = movieData.find((movie) => movie.imdbid === imdbid);
    const videoId = trailer.split('/embed/')[1];
 
    if(movie === undefined) redirect("/");

    React.useEffect(() => {
        const favMovie = favMovies.find((favMovie) => favMovie.imdbid === imdbid)
        if(favMovie) {
          setIsFavourited(true)
        } else {
          setIsFavourited(false)
        }
      }, [favMovies, imdbid])
    
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
    
    return (
        <> 
            {isOpenModal && 
                            <Modal isOpenModal={isOpenModal} handleCancel={handleModal}>                               
                                <VideoPlayer videoId={videoId}/> 
                            </Modal>
            }
            <div className="w-full max-w-xs">
                <Link href={`/movie/${imdbid}`}>
                    <Image
                        src={imgURL}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full rounded-lg"
                        alt={`${title} image`}
                    />
                </Link>
                <span className="font-medium text-xl mt-4 block">{title}</span>
                <div className="flex gap-4 mt-2">
                    <Rating rank={rating}/>
                    <Trailer handleModal={handleModal}/>
                </div>
                <FavIcon movie={movie} imdbid={imdbid} isFavourited={isFavourited} handleAddFav={handleAddFav} handleRemoveFav={handleRemoveFav}/>
            </div>
        </>
    )
}

export default FavMovie;