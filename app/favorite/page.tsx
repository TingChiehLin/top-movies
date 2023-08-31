"use client"

import { NextPage } from "next";
import * as React from 'react';
import { MoviesContext } from "@/context/movieData.context";

import FavMovie from "@/components/FavMovie";
import PageContainer from "@/layouts/PageContainer";

const FavouritePage: NextPage = () => {
  const { favMovies } =
    React.useContext(MoviesContext);
  return (
    <PageContainer title="My Favourites">
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
      </PageContainer>
  );
};

export default FavouritePage;
