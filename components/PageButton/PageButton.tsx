import { FC } from "react";

type ButtonField = "button" | "submit" | "reset" | undefined;

interface PageButtonTypeProp {
    currentPage?: number,
    title: string,  
    type: ButtonField,
    isDisable?: boolean,
    onClick?: () => void
}

const PageButton:FC<PageButtonTypeProp> = (props) => {
  
  const {currentPage, title, type, isDisable, onClick} = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center rounded-md px-3 py-2 
                  text-sm text-gray-900 hover:bg-slate-200
                  ${currentPage === Number(title) ? "bg-slate-200" : "bg-white"}
                  disabled:bg-gray-300
                `}
      disabled={isDisable}
    >
        <span className="">{title}</span>
  </button>
  )
}

export default PageButton;