import { FC } from "react";

interface ButtonTypeProp {
  title: string,
  type: string,
  onClik: () => void
}

const Button:FC<ButtonTypeProp> = () => {
  return <button className=""></button>;
};

export default Button;
