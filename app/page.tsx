"use client";

import FliterBar from "@/components/FliterBar";
import MovieSection from "@/components/MovieSection/MovieSection";
import SearchBar from "@/components/SearchBar/SearchBar";
import * as React from "react";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };
  return (
    <>
      <h1 className="text-4xl mb-6">Top 100 Movies</h1>
      <form className="flex justify-between items-center mb-6">
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
