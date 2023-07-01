"use client";

import { FC } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarTypeProp {
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarTypeProp> = ({ ...props }) => {
  return (
    <div className="w-64 py-4 relative">
      <label className="sr-only" htmlFor={props.id}>
        search
      </label>
      <FiSearch
        className="text-slate-400 absolute left-4 top-8"
        size={"1.6rem"}
      />
      <input
        className="w-full py-4 pl-14 pr-4 border-0 outline-0 rounded-lg"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
