"use client";

import React from "react";
import { FiChevronUp } from "react-icons/fi";

import { FILTER_ITEMS } from "../../lib/filterItems";

const FliterBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative w-32">
      <div
        className="w-full h-full flex justify-center p-2 bg-sky-700 text-white rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center gap-1">
          <span>FliterBar</span>
          <FiChevronUp
            size={24}
            className={`transition ease-out duration-300 ${
              isOpen && "rotate-180"
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          id="dropDown_menu"
          className="absolute top-12 left-0 rounded-lg w-full h-auto bg-slate-50 shadow"
        >
          {FILTER_ITEMS.map((filterItem) => (
            <div
              key={filterItem.name}
              className="pl-4 py-4 cursor-pointer active:text-white active:bg-sky-700 hover:bg-slate-200"
            >
              {filterItem.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FliterBar;
