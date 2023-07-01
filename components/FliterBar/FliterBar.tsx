"use client";

import * as React from "react";
import { FiChevronUp } from "react-icons/fi";

import { FILTER_ITEMS } from "../../lib/filterItems";

const FliterBar = () => {
  const [value, setValue] = React.useState(FILTER_ITEMS[0].value);
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-56 flex items-center gap-4 bg-red-300">
      <label htmlFor="movie-filter">Filter Genre:</label>
      <FiChevronUp
        size={24}
        className={`absolute right-0 top-0 transition ease-out duration-300 ${
          isOpen && "rotate-180"
        }`}
      />
      <select
        id="movie-select"
        value={value}
        className="px-3 py-2 bg-sky-700 text-white rounded-lg appearance-none cursor-pointer"
        onClick={handleClick}
        onChange={handChange}
      >
        {FILTER_ITEMS.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="pl-4 py-4 cursor-pointer active:text-white active:bg-sky-700 hover:bg-slate-200"
            onClick={handleClick}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FliterBar;

{/* <FiChevronUp
size={24}
className={`transition ease-out duration-300 ${
  isOpen && "rotate-180"
}`}
/> */}