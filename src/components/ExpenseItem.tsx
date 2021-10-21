import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem: React.FC<{ title: string, amount: number, date: Date }> = (props) => {
    return (
        <div data-testid='expense-item' className='expense-item'>
            <div data-testid='expense-item-date'>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2 data-testid='expense-item-description'>{props.title}</h2>
                <div data-testid='expense-item-price' className='expense-item__price'>
                    €{props.amount}
                </div>
            </div>
        </div>
    );
};
