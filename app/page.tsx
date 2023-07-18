"use client";

import * as React from "react";
import { MovieContextProvider } from "@/context/movieData.context";

import FliterBar from "@/components/FliterBar";
import MovieSection from "@/components/MovieSection/MovieSection";
import SearchBar from "@/components/SearchBar/SearchBar";

import movieData from "../lib/top_100_movies.json";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [filteredMovieData, setFilteredMovieData] = React.useState(movieData);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newSearchText = e.currentTarget.value;
    setSearchText(newSearchText);
    const newFilteredMovieData = movieData.filter((movie) =>
      movie.title.includes(newSearchText.toLocaleLowerCase())
    );
    setFilteredMovieData(newFilteredMovieData);
  };

  const handleUpdateFilter = (filterGenre: string) => {
    const newFilteredMovieData = movieData.filter((movie) => {
      return movie.genre.includes(filterGenre);
    });
    setFilteredMovieData(newFilteredMovieData);
  };

  return (
    <>
      <MovieContextProvider>
        <h1 className="text-4xl mb-12">Top 100 Movies</h1>
        <form className="flex justify-between items-center mb-16">
          <SearchBar
            id={"search-movie"}
            label={"search movie title"}
            type={"search"}
            name={"search-movie"}
            value={searchText}
            placeholder="Type movie name"
            onChange={handleSearch}
          />
          <div className="flex justify-center gap-4">
            <FliterBar
              id={"filter-genre"}
              label={"Genre:"}
              updateFilter={handleUpdateFilter}
            />
            {/* <FliterBar
            id={"filter-year"}
            label={"Year:"}
            updateFilter={handleUpdateFilter}
          /> */}
          </div>
        </form>
        <MovieSection movieData={filteredMovieData} />
      </MovieContextProvider>
    </>
  );
};

export default Home;
