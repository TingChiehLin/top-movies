"use client";

import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

import { getAllFliterGenres } from "../../lib/fliterbarItems";

interface FliterTypeProp {
  id: string;
  label: string;
  updateFilter: (filterText: string) => void;
}

const FliterBar: React.FC<FliterTypeProp> = ({ id, label, updateFilter }) => {
  const genres = getAllFliterGenres();
  const [value, setValue] = React.useState(genres[0]);
  const ref = React.useRef();

  const handChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const newSearchText = e.currentTarget.value;
    setValue(newSearchText);
    updateFilter(newSearchText);
  };

  const handleClickOutside = () => {};

  return (
    <div className="relative w-full max-w-36 flex items-center gap-4">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        className="w-full px-4 py-2 outline-0 bg-sky-700 text-white rounded-lg cursor-pointer appearance-none"
        onChange={handChange}
      >
        {genres.map((option) => (
          <option
            key={option}
            value={option}
            className="px-4 py-4 cursor-pointer active:text-white active:bg-sky-700 hover:bg-slate-200"
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
