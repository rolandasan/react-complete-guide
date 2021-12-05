import React, { useContext } from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { CartContext } from '../../store/CartContext';
import { CartItem } from './CartItem';
import { MealOrder } from '../../store/CartProvider';

interface Props {
    onClose: () => void;
}

export const Cart: React.FC<Props> = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemAddHandler = (item: MealOrder) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };
    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };
    const cartItems = (
        <ul className={classes.cartItems}>
            {cartCtx.items.map((i) => (
                <CartItem
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    price={i.price}
                    amount={i.amount}
                    onAdd={cartItemAddHandler.bind(null, i)}
                    onRemove={cartItemRemoveHandler.bind(null, i.id)}
                />
            ))}
        </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};
