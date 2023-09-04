import { FC } from "react";

interface PaginationBarTypeProp {
  lastPage: () => void
  nextPage: () => void,
}

const PaginationBar:FC<PaginationBarTypeProp> = (props) => {

    const {lastPage, nextPage} = props;

    return (
      <div
        className="flex items-center justify-between flex-col md:flex-row gap-6"
        aria-label="Pagination"
      >
        {/* <p className="text-sm">
          All <span className="font-medium">{initialIndex}</span> of <span className="font-medium">{currentIndex}</span> results
        </p> */}
        <div>
          pagnation
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={nextPage}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={lastPage}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    )
  }

  export default PaginationBar;