import { FC } from "react";
import PageButton from "../PageButton";

interface PaginationBarTypeProp {
  currentPage: number,
  moviePerPage: number,
  totalMovies: number,
  handlePageSelect: (index: number) => void,
  handleLastPage: () => void
  handleNextPage: () => void,
}

const PaginationBar:FC<PaginationBarTypeProp> = (props) => {

    const {currentPage, moviePerPage, totalMovies, handlePageSelect, handleLastPage, handleNextPage} = props;

    const pageNumbers = [];
    const firstPage = currentPage <= 2;
    const lastPage = 4;

    for(let i = 1; i <= Math.ceil(totalMovies / moviePerPage); i++) { 
      pageNumbers.push(i);
    }

    return (
      <div
        className="flex items-center justify-center flex-col md:flex-row gap-2"
        aria-label="Pagination"
      >
        <PageButton title={"Previous"} type={"button"} isDisable={firstPage} onClick={handleLastPage}/>
        <div className="flex gap-2">
          {
            pageNumbers.map((number, index) => {
              return (
                <button key={number} 
                      className="cursor-pointer select-none rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
                      type="button"
                      onClick={() => handlePageSelect(number)}      
                >
                  {number}
                </button>
              )
            })
          }
        </div>
        <PageButton title={"Next"} type={"button"} isDisable={firstPage} onClick={handleNextPage}/>
      </div>
    )
  }

  export default PaginationBar;