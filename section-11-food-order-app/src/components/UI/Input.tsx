import React, { ForwardedRef } from 'react';
import classes from './Input.module.css';

interface Props {
    inputLabel: string;
    input: any;
}

export const Input = React.forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.inputLabel}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});
