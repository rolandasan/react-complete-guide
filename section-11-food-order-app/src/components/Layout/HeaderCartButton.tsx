import React from 'react';
import classes from './HeaderCartButton.module.css';
import { CartIcon } from '../Cart/CartIcon';

interface Props {
    onClick: () => void;
}

export const HeaderCartButton: React.FC<Props> = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>2</span>
        </button>
    );
};
