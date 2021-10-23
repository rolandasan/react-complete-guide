import React from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../ui/Card';
import { Expense } from '../../models/Expense';

interface ExpenseItemProps {
    expense: Expense;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
    return (
        <li>
            <Card className='expense-item' data-testid='expense-item'>
                <ExpenseDate date={props.expense.date} />
                <div className='expense-item__description'>
                    <h2 data-testid='expense-item-description'>{props.expense.title}</h2>
                    <div data-testid='expense-item-price' className='expense-item__price'>
                        €{props.expense.amount}
                    </div>
                </div>
            </Card>
        </li>
    );
};
