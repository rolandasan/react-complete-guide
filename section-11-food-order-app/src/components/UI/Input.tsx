import React from 'react';
import classes from './Input.module.css';

interface Props {
    inputLabel: string;
    input: any;
}

export const Input: React.FC<Props> = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.inputLabel}</label>
            <input {...props.input} />
        </div>
    );
};
