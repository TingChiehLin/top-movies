"use client";

import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

import { FILTER_ITEMS } from "../../lib/filterItems";

const FliterBar = () => {
  const [value, setValue] = React.useState(FILTER_ITEMS[0].value);
  const ref = React.useRef();

  const handleClick = () => {};

  const handChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  const handleClickOutside = () => {};

  return (
    <div className="relative w-32 flex items-center gap-4">
      {/* <label className="w-52" htmlFor="movie-filter">
        Filter Genre:
      </label> */}
      <select
        id="movie-select"
        value={value}
        className="w-full px-4 py-2 outline-0 bg-sky-700 text-white rounded-lg cursor-pointer appearance-none"
        onClick={handleClick}
        onChange={handChange}
      >
        {FILTER_ITEMS.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="px-4 py-4 cursor-pointer active:text-white active:bg-sky-700 hover:bg-slate-200"
            onClick={handleClick}
          >
            {option.label}
          </option>
        ))}
      </select>
      <FiChevronDown
        size={16}
        className={"absolute right-3 top-1/2 -translate-y-1/2"}
        color="white"
      />
    </div>
  );
};

export default FliterBar;
