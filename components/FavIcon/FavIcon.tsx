import { FC } from "react";
import { HiMiniHeart, HiOutlineHeart } from "react-icons/hi2";
import {MovieField} from '../../lib/movieField';

interface FavIconTypeProp {
    movie: MovieField,
    imdbid: string,
    isFavourited: boolean,
    handleAddFav: (movie: MovieField) => void,
    handleRemoveFav: (imdbid: string) => void,
}

const FavIcon:FC<FavIconTypeProp> = ({movie, imdbid, isFavourited, handleAddFav, handleRemoveFav}) => {
    return (
        <div className="flex items-center gap-2">
            <span>Favorite</span>
            {isFavourited ?  <HiMiniHeart className="cursor-pointer text-favouriteColor" size={'1.5rem'} onClick={() => handleRemoveFav(imdbid)} /> 
                        :  <HiOutlineHeart className="cursor-pointer" size={'1.5rem'} onClick={() => handleAddFav(movie as MovieField)}/>}
        </div>
    )
}

export default FavIcon;