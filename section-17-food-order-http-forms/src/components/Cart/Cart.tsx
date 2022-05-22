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
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const submitOrderHandler = async (userData: { name: string; street: string; city: string; postalCode: string }) => {
        setIsSubmiting(true);
        await fetch('https://react-complete-guide-63504-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }),
        });
        setIsSubmiting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
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
    const cartModalContent = (
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </>
    );
    const submitingModalContent = <p>Sending order data ...</p>;
    const didSubmitModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </>
    );
    return (
        <Modal onClose={props.onClose}>
            {!isSubmiting && !didSubmit && cartModalContent}
            {isSubmiting && submitingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    );
};
