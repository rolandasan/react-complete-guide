import React, {PropsWithChildren} from 'react';

import classes from './Button.module.css';

export const Button: React.FC<PropsWithChildren<any>> = (props) => {
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};
