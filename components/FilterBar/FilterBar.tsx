"use client";

import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

import { getAllFilterGenres } from "../../lib/filterbarItems";

interface FilterTypeProp {
  id: string;
  updateFilter: (filterText: string) => void;
}

const FilterBar: React.FC<FilterTypeProp> = ({ id, updateFilter }) => {
  const genres = getAllFilterGenres();
  const [value, setValue] = React.useState(genres[0]);

  const handChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const newSearchText = e.currentTarget.value;
      setValue(newSearchText);
      updateFilter(newSearchText);
  };

  return (
    <div className="relative w-full flex items-center gap-4">
      <label className="text-xl" htmlFor={id}>Genre:</label>
      <select
        id={id}
        value={value}
        className="pl-5 pr-10 py-2 outline-0 bg-sky-700 text-white rounded-lg cursor-pointer appearance-none"
        onChange={handChange}
      >
        {genres.map((option) => (
          <option
            key={option}
            value={option}
            className="pl-6 py-4 cursor-pointer active:text-white active:bg-sky-700 hover:bg-slate-200"
          >
            {option}
          </option>
        ))}
      </select>
      <FiChevronDown
        size={16}
        className={"absolute right-4 top-1/2 -translate-y-1/2"}
        color="white"
      />
    </div>
  );
};

export default FilterBar;
