import React from 'react';
import './ExpenseItem.css';
import { Expense } from '../models/Expense';

export const ExpenseItem: React.FC<Expense> = (props) => {
    const expenseDateMonth = props.date.toLocaleDateString('lt-LT', { month: 'long' });
    const expenseDateYear = props.date.getFullYear();
    const expenseDateDay = props.date.getDate();

    return (
        <div data-testid='expense-item' className='expense-item'>
            <div data-testid='expense-item-date'>
                <div data-testid='expense-item-date-year'>{expenseDateYear}</div>
                <div data-testid='expense-item-date-month'>{expenseDateMonth}</div>
                <div data-testid='expense-item-date-day'>{expenseDateDay}</div>
            </div>
            <div className='expense-item__description'>
                <h2 data-testid='expense-item-description'>{props.title}</h2>
                <div data-testid='expense-item-price' className='expense-item__price'>
                    €{props.amount}
                </div>
            </div>
        </div>
    );
};
