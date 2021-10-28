import React, { ChangeEvent } from "react";
import classes from "./Input.module.css";

interface InputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  isValid: boolean;
  onChangeHandler?: (event: ChangeEvent<any>) => void;
  onBlurHandler?: () => void;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div
      className={`${classes.control} ${!props.isValid ? classes.invalid : ""}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="email"
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    </div>
  );
};
