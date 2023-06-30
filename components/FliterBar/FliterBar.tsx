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
    <div
      className="w-32 h-full flex justify-center p-2 bg-sky-700 text-white rounded-lg cursor-pointer"
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
  );
};

export default FliterBar;
