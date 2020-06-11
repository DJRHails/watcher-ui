import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: VoidFunction;
}

// type ButtonProps = {
//   children: ReactNode;
//   onClick?: () => void;
// }

export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
