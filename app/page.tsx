"use client";

import * as React from "react";

import MovieSection from "@/components/MovieSection/MovieSection";
import SearchBar from "@/components/SearchBar/SearchBar";

import movieData from "../lib/top_100_movies.json";
import FilterBar from "@/components/FilterBar";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [filteredMovieData, setFilteredMovieData] = React.useState(movieData);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newSearchText = e.currentTarget.value;
    setSearchText(newSearchText);
    const newFilteredMovieData = movieData.filter((movie) => {
    const newMovTitle = movie.title.toLowerCase().trim();
      return newMovTitle.includes(newSearchText.toLowerCase())
    }
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
            <FilterBar
              id={"filter-genre"}
              updateFilter={handleUpdateFilter}
            />
          </div>
        </form>
        <MovieSection movieData={filteredMovieData} />
    </>
  );
};

export default Home;
