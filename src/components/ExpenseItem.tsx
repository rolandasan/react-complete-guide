import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem: React.FC<{ title: string, amount: number, date: Date }> = (props) => {
    const {date: expenseDate, title: expenseDescription, amount: expenseAmount} = props;

    return (
        <div data-testid='expense-item' className='expense-item'>
            <div data-testid='expense-item-date'>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2 data-testid='expense-item-description'>{expenseDescription}</h2>
                <div data-testid='expense-item-price' className='expense-item__price'>
                    €{expenseAmount}
                </div>
            </div>
        </div>
    );
};
