import { FC } from "react";

interface PaginationBarTypeProp {
  initialIndex: number,
  currentIndex: number,
}

const PaginationBar:FC<PaginationBarTypeProp> = ({initialIndex, currentIndex}) => {


    const handleLastPage = () => {

    }

    const handleNextPage = () => {

    }

    return (
      <div
        className="flex items-center justify-between flex-col md:flex-row gap-6 mb-12"
        aria-label="Pagination"
      >
        <p className="text-sm">
          Showing <span className="font-medium">{initialIndex}</span> to <span className="font-medium">{currentIndex}</span>
        </p>
        <div className="flex">
          <button
            type="button"
            onClick={handleLastPage}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    )
  }

  export default PaginationBar;