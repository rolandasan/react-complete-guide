import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import { CartIcon } from '../Cart/CartIcon';
import { CartContext } from '../../store/CartContext';

interface Props {
    onClick: () => void;
}

export const HeaderCartButton: React.FC<Props> = (props) => {
    const [btnAnimate, setBtnAnimate] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const cartItemsNo: number = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnAnimate ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnAnimate(true);
        const timer = setTimeout(() => {
            setBtnAnimate(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsNo}</span>
        </button>
    );
};
