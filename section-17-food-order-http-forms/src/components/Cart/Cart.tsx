import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { CartContext } from '../../store/CartContext';
import { CartItem } from './CartItem';
import { MealOrder } from '../../store/CartProvider';
import { Checkout } from './Checkout';

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
    const orderHandler = () => {
        setIsCheckout(true);
    };
    const [isCheckout, setIsCheckout] = useState(false);
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
    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    );
};
