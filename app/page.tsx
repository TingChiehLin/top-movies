"use client";

import * as React from "react";
import { NextPage } from "next/types";

import MovieSection from "@/components/MovieSection/MovieSection";
import SearchBar from "@/components/SearchBar/SearchBar";

import movieData from "../lib/top_100_movies.json";
import FilterBar from "@/components/FilterBar";
import PaginationBar from "@/components/PaginationBar";
import { MovieField } from "@/lib/movieField";

interface HomePropType {
  searchParams: HomePropType
}

interface MovieAction {
  type: string,
  payload?: any  
}

interface MovieState {
  searchText: string,
  filteredMovieData: MovieField[],
  currentPage: number,
}

const initialState = {
  searchText: "",
  filteredMovieData: movieData,
  currentPage: 1,
}

function movieReducer(state: MovieState, action: MovieAction) {
    const { type, payload } = action;

    switch(type) {
      case "SEARCH_MOVIE":
        return {
          ...state,
          searchText: payload.searchText,
          filteredMovieData: payload.filteredMovieData,
        }
      case "UPDATE_FILTER":
        return {
          ...state,
          filteredMovieData: payload.filteredMovieData,
          currentPage: payload.currentPage,
          searchText: payload.searchText,
        }
      case "PAGE_SELECT":
        return {
          ...state,
          currentPage: payload,
        }
      case "LAST_PAGE":
        return {
          ...state,
          currentPage: state.currentPage - 1,
        }
      case "NEXT_PAGE":
        return {
          ...state,
          currentPage: state.currentPage + 1.
        }
      default:
        return state;
    }
}

const Home:NextPage<HomePropType> = () => {

  //useState
  // const [searchText, setSearchText] = React.useState("");
  // const [filteredMovieData, setFilteredMovieData] = React.useState(movieData);
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [moviePerPage] = React.useState(8);

  //useReducer
  const [state, dispatch] = React.useReducer(movieReducer, initialState)

  const {searchText, filteredMovieData, currentPage} = state;
  console.log(currentPage)
  //Limit to 8 movies per page
  const moviePerPage = 8;
  const start = (currentPage - 1) * moviePerPage;
  const end = currentPage * moviePerPage;
  const formatData = filteredMovieData.slice(start, end);

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
    if (filterGenre === "Any") {
      setFilteredMovieData(movieData);
      return;
    }
    const newFilteredMovieData = movieData.filter((movie) => {
      return movie.genre.includes(filterGenre);
    });
    setFilteredMovieData(newFilteredMovieData);
    // setCurrentPage(1);
    dispatch({type:"PAGE_SELECT", payload: 1})
    setSearchText("");
  };

  const handlePageSelect = (index:number) => {
    dispatch({type:"PAGE_SELECT", payload: index})
    // setCurrentPage(index);
  }

  const handleLastPage = () => {
    dispatch({type:"LAST_PAGE"})
    //setCurrentPage(preState => preState - 1);
  }

  const handleNextPage = () => {
    //setCurrentPage(preState => preState + 1);
    dispatch({type:"NEXT_PAGE"})
  }

  return (
    <div className="w-full max-w-7xl h-full mx-auto py-32 flex flex-col justify-between">
        <div className="">
          <h1 className="text-4xl mb-12 font-bold">Top 100 Movies</h1>
          <form className="flex justify-between items-center">
            <div>
              <SearchBar
                id={"search-movie"}
                label={"search movie title"}
                type={"search"}
                name={"search-movie"}
                value={searchText}
                placeholder="Type movie name"
                onChange={handleSearch}
              />
              {
                searchText !== "" &&
                <span className="text-sm mt-4 block">
                  Showing <span className="font-medium">{filteredMovieData.length}</span> to <span className="font-medium">{movieData.length}</span>
                </span>
              }
            </div>
            <div className="flex justify-center gap-4">
              <FilterBar
                id={"filter-genre"}
                updateFilter={handleUpdateFilter}
              />
            </div>
          </form>
        </div>
        {filteredMovieData.length === 0 ? <span className="text-2xl text-center">There is no any movies on the list</span> : <MovieSection movieData={formatData} />}
        <PaginationBar 
                       currentPage={currentPage}
                       moviePerPage={moviePerPage} 
                       totalMovies={filteredMovieData.length} 
                       handlePageSelect={handlePageSelect} 
                       handleLastPage={handleLastPage}
                       handleNextPage={handleNextPage}
        />
    </div>
  );
};

export default Home;
