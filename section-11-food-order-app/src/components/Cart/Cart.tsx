import React from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';

interface Props {
    onClose: () => void;
}

export const Cart: React.FC<Props> = (props) => {
    const cartItems = (
        <ul className={classes.cartItems}>
            {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((i) => (
                <li>{i.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>234</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
