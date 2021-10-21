import { Expense } from '../../models/Expense';
import { ExpenseItem } from './ExpenseItem';
import React from 'react';
import './Expenses.css';
import { Card } from '../ui/Card';

interface ExpensesProps {
    expenses: Expense[];
}

export const Expenses: React.FC<ExpensesProps> = (props) => {
    return (
        <Card className='expenses' data-testid='expenses'>
            {props.expenses.map((e) => {
                return <ExpenseItem expense={e} key={e.id} />;
            })}
        </Card>
    );
};
