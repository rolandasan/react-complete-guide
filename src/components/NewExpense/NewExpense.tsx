import React from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { Expense } from '../../models/Expense';

interface NewExpenseProps {
    onAddExpense: (newExpense: Expense) => void;
}

export const NewExpense: React.FC<NewExpenseProps> = (props) => {
    const newExpenseHandler = (newExpenseData: { title: string; amount: number; date: Date }) => {
        const newExpense: Expense = {
            ...newExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(newExpense);
    };

    return (
        <div className='new-expense' data-testid='new-expense'>
            <ExpenseForm onNewExpense={newExpenseHandler} />
        </div>
    );
};
