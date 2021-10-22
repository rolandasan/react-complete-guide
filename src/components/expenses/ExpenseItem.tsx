import React, { useState } from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../ui/Card';
import { Expense } from '../../models/Expense';

interface ExpenseItemProps {
    expense: Expense;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
    const [expense, setExpense] = useState(props.expense);

    const clickHandler = () => {
        setExpense({ id: 'e5', title: 'Updated title', amount: 34.5, date: new Date(2021, 9, 22, 9, 7) });
    };

    return (
        <Card className='expense-item' data-testid='expense-item'>
            <ExpenseDate date={expense.date} />
            <div className='expense-item__description'>
                <h2 data-testid='expense-item-description'>{expense.title}</h2>
                <div data-testid='expense-item-price' className='expense-item__price'>
                    €{expense.amount}
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
};
