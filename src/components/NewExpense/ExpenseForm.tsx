import React, { ChangeEvent, useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm: React.FC = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredTitle(event.target.value);
    };
    const amountChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredAmount(event.target.value);
    };
    const dateChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredDate(event.target.value);
    };

    return (
        <form data-testid='expense-form'>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangedHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min={0.01} step={0.01} onChange={amountChangedHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12–31' onChange={dateChangedHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
