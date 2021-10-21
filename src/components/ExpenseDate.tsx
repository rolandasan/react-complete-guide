import React from 'react';

interface ExpenseDateProps {
    date: Date;
}

export const ExpenseDate: React.FC<ExpenseDateProps> = (props) => {
    const expenseDateMonth = props.date.toLocaleDateString('lt-LT', { month: 'long' });
    const expenseDateYear = props.date.getFullYear();
    const expenseDateDay = props.date.getDate();

    return (
        <div data-testid='expense-item-date'>
            <div data-testid='expense-item-date-year'>{expenseDateYear}</div>
            <div data-testid='expense-item-date-month'>{expenseDateMonth}</div>
            <div data-testid='expense-item-date-day'>{expenseDateDay}</div>
        </div>
    );
};
