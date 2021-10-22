import React from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense: React.FC = () => {
    return (
        <div className='new-expense' data-testid='new-expense'>
            <ExpenseForm />
        </div>
    );
};
