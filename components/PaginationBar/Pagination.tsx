import { FC } from "react";
import Button from "../Button";
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
    const lastPage = currentPage >= Math.ceil(totalMovies / moviePerPage);

    for(let i = 1; i <= Math.ceil(totalMovies / moviePerPage); i++) { 
      pageNumbers.push(i);
    }

    return (
      <div
        className="flex items-center justify-center flex-col md:flex-row gap-2"
        aria-label="Pagination"
      >
        <Button title={"Previous"} type={"button"} isDisable={firstPage} onClick={handleLastPage}/>
        
        <div className="flex gap-2">
          {
            pageNumbers.map((number) => {
              return (
                <PageButton key={number} currentPage={currentPage}  title={number.toString()} type={"button"} isDisable={lastPage} onClick={() => handlePageSelect(number)}/>
              )
            })
          }
        </div>

        <Button title={"Next"} type={"button"} isDisable={lastPage} onClick={handleNextPage}/>
      </div>
    )
  }

  export default PaginationBar;