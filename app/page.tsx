"use client";

import * as React from "react";

import FliterBar from "@/components/FliterBar";
import MovieSection from "@/components/MovieSection/MovieSection";
import SearchBar from "@/components/SearchBar/SearchBar";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.currentTarget.value);
  };
  return (
    <>
      <h1 className="text-4xl mb-12">Top 100 Movies</h1>
      <form className="flex justify-between items-center mb-16">
        <SearchBar
          id={"search-movie"}
          type={"search"}
          name={"search-movie"}
          value={searchText}
          placeholder="Type movie name"
          onChange={handleSearch}
        />
        <FliterBar />
      </form>
      <MovieSection />
    </>
  );
};

export default Home;
