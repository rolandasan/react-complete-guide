import './ExpensesList.css';
import { Expense } from '../../models/Expense';
import { ExpenseItem } from './ExpenseItem';
import React from 'react';

interface ExpensesListProps {
    expenses: Expense[];
}

export const ExpensesList: React.FC<ExpensesListProps> = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>There are no expenses</h2>;
    }
    return (
        <ul className='expenses-list'>
            {props.expenses.map((e) => (
                <ExpenseItem expense={e} key={e.id} />
            ))}
        </ul>
    );
};
