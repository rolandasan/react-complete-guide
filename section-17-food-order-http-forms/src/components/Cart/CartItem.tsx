import React from 'react';
import classes from './CartItem.module.css';

interface Props {
    id: string;
    name: string;
    amount: number;
    price: number;
    onAdd: () => void;
    onRemove: () => void;
}

export const CartItem: React.FC<Props> = (props) => {
    const price = `€${props.price.toFixed(2)}`;
    return (
        <li className={classes['cart-item']} key={props.id}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};
