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
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-4xl">Top 100 Movies</h1>
        <SearchBar
          id={"search-movie"}
          type={"search"}
          name={"search-movie"}
          value={searchText}
          placeholder="Type movie name"
          onChange={handleSearch}
        />
      </div>
      <FliterBar />
      <MovieSection />
    </div>
  );
};

export default Home;
