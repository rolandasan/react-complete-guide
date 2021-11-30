import classes from './User.module.css';
import React from 'react';

interface Props {
    name: string;
}

export const User: React.FC<Props> = (props) => {
    return <li className={classes.user}>{props.name}</li>;
};
