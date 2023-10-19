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

const initialState: MovieState = {
  searchText: "",
  filteredMovieData: movieData,
  currentPage: 1,
}

function movieReducer(state: MovieState, action: MovieAction) {
    const { type, payload } = action;

    switch(type) {
      case "SEARCH_MOVIE": {
        const newSearchText = payload;
        const newFilteredMovieData = movieData.filter((movie) => {
          const newMovTitle = movie.title.toLowerCase().trim();
          return newMovTitle.includes(newSearchText.toLowerCase())
        })
        return {
          ...state,
          filteredMovieData: newFilteredMovieData,
          searchText: newSearchText,
        }
      }
      case "UPDATE_FILTER": {
        const newGenre = payload;
        if (newGenre === "Any") {
          return {
            ...state,
            filteredMovieData: movieData,
            currentPage: 1,
            searchText: "",
          }
        }

        const newFilteredMovieData = movieData.filter((movie) => {
          return movie.genre.includes(newGenre);
        })        

        return {
          ...state,
          filteredMovieData: newFilteredMovieData,
          searchText: ""
        }
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

  const [state, dispatch] = React.useReducer(movieReducer, initialState)

  const {searchText, filteredMovieData, currentPage} = state;

  const moviePerPage = 8;
  const start = (currentPage - 1) * moviePerPage;
  const end = currentPage * moviePerPage;
  const formatData = filteredMovieData.slice(start, end);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newSearchText = e.currentTarget.value;
    dispatch({type:"SEARCH_MOVIE", payload: newSearchText})
  };

  const handleUpdateFilter = (filterGenre: string) => {
    dispatch({type:"UPDATE_FILTER", payload: filterGenre})
  };

  const handlePageSelect = (index:number) => {
    dispatch({type:"PAGE_SELECT", payload: index})
  }

  const handleLastPage = () => {
    dispatch({type:"LAST_PAGE"})
  }

  const handleNextPage = () => {
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
