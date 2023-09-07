import { FC } from "react";

interface PaginationBarTypeProp {
  moviePerPage: number,
  totalMovies: number,
  handlePageSelect: (index: number) => void,
  lastPage: () => void
  nextPage: () => void,
}

const PaginationBar:FC<PaginationBarTypeProp> = (props) => {

    const {moviePerPage, totalMovies, handlePageSelect, lastPage, nextPage} = props;

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMovies / moviePerPage); i++) { 
      pageNumbers.push(i);
    }

    return (
      <div
        className="flex items-center justify-center flex-col md:flex-row gap-2"
        aria-label="Pagination"
      >
        <button
          type="button"
          onClick={lastPage}
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {
            pageNumbers.map((number) => {
              
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
        <button
            type="button"
            onClick={nextPage}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
          >
            Next
        </button>
      </div>
    )
  }

  export default PaginationBar;