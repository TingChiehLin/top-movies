import { FC, ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  element: "button";
  title: string;  
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  element: "a";
} & ComponentPropsWithoutRef<"a">;

const Button:FC<ButtonProps | AnchorProps> = (props) => {
  const {element, title, children} = props;

  if(element === "a") {
    return <a {...props}></a>
  } 

  return (
    <button
    className={`relative inline-flex items-center rounded-md bg-white px-3 py-2 
                text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-slate-100
               disabled:bg-gray-300
              `}
    {...props}
    >
        <span className="text-xs md:text-sm font-bold">{title}</span>
        {children}
  </button>
  )
}

export default Button;