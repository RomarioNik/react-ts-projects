// import { IconType } from "react-icons";
import { type PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  func: () => void;
  className: string;
}>;

export const Button = ({ children, func, className }: ButtonProps) => {
  return (
    <button className={className} type="button" onClick={func}>
      {children}
    </button>
  );
};
