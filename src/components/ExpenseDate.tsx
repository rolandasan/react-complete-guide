import React from 'react';
import './ExpenseDate.css';

interface ExpenseDateProps {
    date: Date;
}

export const ExpenseDate: React.FC<ExpenseDateProps> = (props) => {
    const expenseDateMonth = props.date.toLocaleDateString('lt-LT', { month: 'long' });
    const expenseDateYear = props.date.getFullYear();
    const expenseDateDay = props.date.getDate();

    return (
        <div data-testid='expense-item-date' className='expense-date'>
            <div data-testid='expense-item-date-year' className='expense-date__year'>{expenseDateYear}</div>
            <div data-testid='expense-item-date-month' className='expense-date__month'>{expenseDateMonth}</div>
            <div data-testid='expense-item-date-day' className='expense-date__day'>{expenseDateDay}</div>
        </div>
    );
};
