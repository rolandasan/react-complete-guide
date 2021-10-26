import React, { PropsWithChildren } from "react";

import classes from "./Card.module.css";

type CardProps = PropsWithChildren<{ className: string }>;
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
