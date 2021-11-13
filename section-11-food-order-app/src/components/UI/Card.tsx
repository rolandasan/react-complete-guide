import React, { PropsWithChildren } from 'react';
import classes from './Card.module.css';

export const Card: React.FC<PropsWithChildren<any>> = (props) => {
    return <div className={classes.card}>{props.children}</div>;
};
