import React from 'react';
import Image from "next/image";
import { FC } from "react";
import { HiMiniStar,HiMiniHeart,HiOutlineHeart, HiXMark } from "react-icons/hi2";
import { MovieField } from '@/lib/movieField';

import { MoviesContext } from "@/context/movieData.context";
import movieData from "@/lib/top_100_movies.json";
import TrailerIcon from '../../public/assets/play_video.svg';

import VideoPlayer from '../VideoPlayer';

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
                            <div className='fixed inset-0 z-10'>
                                <div className={`fixed inset-0 w-full max-h-full over-flow-x-auto overflow-y-auto transition-opacity east-out duration-400 opacity-100 bg-black z-30
                                                ${isOpenModal && "opacity-70"} `}
                                >
                                </div>
                                <VideoPlayer videoId={videoId}/> 
                                <HiXMark size={"2rem"} color='white' 
                                             className='absolute right-10 top-10 z-50 cursor-pointer'
                                             onClick={handleModal}
                                />
                            </div>
            }
            <div className="w-full max-w-xs">
                <Image
                    src={imgURL}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full rounded-lg"
                    alt={`${title} image`}
                />
                <span className="font-medium text-xl mt-4 block">{title}</span>
                <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1.5">
                        <span>Rating {rating}</span>
                        <HiMiniStar size={"1.5rem"} className="text-yellow-400" />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>Trailer</span>
                        <Image 
                            src={TrailerIcon}
                            width="0"
                            height="0"
                            sizes='100vw'
                            className='w-6 rounded-lg cursor-pointer'
                            alt={"trailer icon"}
                            onClick={handleModal}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                        <span>Favorite</span>
                        {isFavourited ?  
                                        <HiMiniHeart className="cursor-pointer text-favouriteColor" size={'1.5rem'} 
                                                        onClick={() => handleRemoveFav(imdbid)}/> : 
                                        <HiOutlineHeart className="cursor-pointer" size={'1.5rem'} 
                                                        onClick={() => handleAddFav(movie as MovieField)}
                        />}
                </div>
            </div>
        </>
    )
}

export default FavMovie;