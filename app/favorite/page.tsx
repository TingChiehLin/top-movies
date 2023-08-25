"use client"

import { NextPage } from "next";
import * as React from 'react';
import { MoviesContext } from "@/context/movieData.context";

import FavMovie from "@/components/FavMovie";
import BackPage from "@/components/BackPage";

const FavouritePage: NextPage = () => {
  const { favMovies } =
    React.useContext(MoviesContext);
  return (
    <div className="w-full max-w-7xl mx-auto py-4 md:py-12">
       <BackPage href={"/"}/>
          <h1 className="text-4xl font-bold mb-12">My Favourites</h1> 
          {(favMovies.length === 0) && <span>It is empty, You should add some of your favourite movie 😎</span>}         
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {
              favMovies.map((movie) => {
                return <FavMovie  key={movie.imdbid}
                                  imdbid={movie.imdbid}
                                  imgURL={movie.image} rating={movie.rating} 
                                  title={movie.title} trailer={movie.trailer}
                        />
              })
            }
          </div>
  </div>);
};

export default FavouritePage;
