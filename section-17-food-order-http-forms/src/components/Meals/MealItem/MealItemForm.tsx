import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import { Input } from '../../UI/Input';

interface Props {
    id: string;
    onAddToCart: (amount: number) => void;
}

export const MealItemForm: React.FC<Props> = (props) => {
    const [amountIsValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: any) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current!.value;

        if (enteredAmount.trim().length === 0 || +enteredAmount < 0 || +enteredAmount > 5) {
            setIsAmountValid(false);
            return;
        }
        props.onAddToCart(+enteredAmount);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                inputLabel='Ammount'
                input={{
                    id: 'ammount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Add</button>
            {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
        </form>
    );
};
