import React, { PropsWithChildren } from "react";

import classes from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  disabled: boolean;
  onClick?: () => void;
}>;

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
