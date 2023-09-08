import { FC } from "react";

type ButtonField = "button" | "submit" | "reset" | undefined;

interface PageButtonTypeProp {
    title: string,  
    type: ButtonField,
    isDisable?: boolean,
    onClick: () => void
}

const PageButton:FC<PageButtonTypeProp> = (props) => {
  
  const {title, type, isDisable, onClick} = props;

  return (
    <button
    type={type}
    onClick={onClick}
    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 
               text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50
             disabled:bg-gray-300
             "
    disabled={isDisable}
    >
        {title}
  </button>
  )
}

export default PageButton;