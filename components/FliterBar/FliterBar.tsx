"use client";

import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

import { FLITERBAR_ITEMS, fliterType } from "../../lib/fliterbarItems";

const getAllFliterGenres = (FLITERBAR_ITEMS: fliterType[]) => {
  const fliterbarItems = Object.keys(FLITERBAR_ITEMS);
  return fliterbarItems;
};

const FliterBar = () => {
  const genres = getAllFliterGenres(FLITERBAR_ITEMS);

  const [value, setValue] = React.useState(genres[0]);
  const ref = React.useRef();

  const handleClick = () => {};

  const handChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleClickOutside = () => {};

  return (
    <div className="relative w-32 flex items-center gap-4">
      <select
        id="movie-select"
        value={value}
        className="w-full px-4 py-2 outline-0 bg-sky-700 text-white rounded-lg cursor-pointer appearance-none"
        onClick={handleClick}
        onChange={handChange}
      >
        {genres.map((option) => (
          <option
            key={option}
            value={option}
            className="px-4 py-4 cursor-pointer active:text-white active:bg-sky-700 hover:bg-slate-200"
            onClick={handleClick}
          >
            {option}
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
