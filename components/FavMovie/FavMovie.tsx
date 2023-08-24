import React from 'react';
import Image from "next/image";
import { FC } from "react";
import { HiMiniStar,HiMiniHeart,HiOutlineHeart  } from "react-icons/hi2";
import { MovieField } from '@/lib/movieField';

import { MoviesContext } from "@/context/movieData.context";
import movieData from "@/lib/top_100_movies.json";
import TrailerIcon from '../../public/assets/play_video.svg';

interface MovieCardPropType {
    imdbid: string,
    imgURL: string,
    rating: string,
    title: string,
    trailer: string
}

const FavMovie:FC<MovieCardPropType> = ({...props}) => {
    const [isFavourited, setIsFavourited] = React.useState(false);
    const {favMovies, addFavMovie, removeFavMovie} = React.useContext(MoviesContext);
    const {imdbid,imgURL, rating, title, trailer} = props;
    const movie = movieData.find((movie) => movie.imdbid === imdbid);
    console.log(trailer)
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

    return (
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
    )
}

export default FavMovie;