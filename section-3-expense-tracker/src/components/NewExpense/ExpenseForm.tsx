import React, { ChangeEvent, FormEvent, useState } from 'react';
import './ExpenseForm.css';
interface ExpenseData {
    title: string;
    amount: number;
    date: Date;
}

interface ExpenseFormProps {
    onNewExpense: (newExpense: ExpenseData) => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const titleChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredTitle(event.target.value);
    };
    const amountChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredAmount(event.target.value);
    };
    const dateChangedHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const expenseEntered: ExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onNewExpense(expenseEntered);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm((prev) => !prev);
    };

    const showFormHandler = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm((prev) => !prev);
    };

    if (!showForm) {
        return (
            <div data-testid='expense-form-hidden'>
                <button onClick={showFormHandler} data-testid='btn-show-expense-form'>
                    Add Expense
                </button>
            </div>
        );
    }
    return (
        <form data-testid='expense-form' onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangedHandler} data-testid='inp-expense-title' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min={0.01}
                        step={0.01}
                        onChange={amountChangedHandler}
                        data-testid='inp-expense-amount'
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min='2019-01-01'
                        max='2022-12–31'
                        onChange={dateChangedHandler}
                        data-testid='inp-expense-date'
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='reset' onClick={showFormHandler} data-testid='btn-close-expense-form'>
                    Cancel
                </button>
                <button type='submit' data-testid='btn-submit-expense-form'>
                    Add Expense
                </button>
            </div>
        </form>
    );
};
