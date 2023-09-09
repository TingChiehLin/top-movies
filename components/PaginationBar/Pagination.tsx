import { FC } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

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
    
    const pageNumbers:number[] = [];
    const firstPage = currentPage <= 1;
    const lastPage = currentPage >= Math.ceil(totalMovies / moviePerPage);

    for(let i = 1; i <= Math.ceil(totalMovies / moviePerPage); i++) { 
      pageNumbers.splice(pageNumbers.length,0, i);
    }

    const filteredArray = pageNumbers.filter((number) => {  
      return number >= currentPage - 2 && number <= currentPage + 2;
    });
    
    return (
      <div
        className="flex items-center justify-center flex-col md:flex-row gap-2"
        aria-label="Pagination"
      >
        {firstPage ? <HiChevronLeft className="text-gray-300 cursor-pointer" size={"2rem"} />
                   : <HiChevronLeft className="text-primaryColor cursor-pointer" size={"2rem"} 
                                    onClick={handleLastPage}/>}
        <div className="flex gap-2">
          {
            filteredArray.map((number) => {
              return (
                <PageButton key={number} currentPage={currentPage} title={number.toString()} type={"button"} onClick={() => handlePageSelect(number)}/>
              )
            })
          }
        </div>
        {lastPage ? <HiChevronRight className="text-gray-300 cursor-pointer" size={"2rem"} />
                  : <HiChevronRight className="text-primaryColor cursor-pointer" size={"2rem"} 
                                    onClick={handleNextPage}/>} 
      </div>
    )
  }

  export default PaginationBar;