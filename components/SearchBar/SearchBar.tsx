"use client";

import { FC } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarTypeProp {
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}

const SearchBar: FC<SearchBarTypeProp> = ({ ...props }) => {
  return (
    <div className="w-64 h-12 py-4 pl-4 bg-blue-500 border-8">
      <FiSearch className="text-slate-400" size={"1.5rem"} />
      <input className="w-full p-4" {...props} />
    </div>
  );
};

export default SearchBar;
