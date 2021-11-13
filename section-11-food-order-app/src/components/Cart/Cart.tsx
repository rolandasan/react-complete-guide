import React from 'react';
import classes from './Cart.module.css';

export const Cart: React.FC = () => {
    const cartItems = (
        <ul className={classes.cartItems}>
            {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((i) => (
                <li>i</li>
            ))}
        </ul>
    );
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>234</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};
