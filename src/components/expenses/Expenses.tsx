import { Expense } from '../../models/Expense';
import { ExpenseItem } from './ExpenseItem';
import React, { useState } from 'react';
import './Expenses.css';
import { Card } from '../ui/Card';
import { ExpenseFilter } from './ExpenseFilter';
import {ExpensesList} from "./ExpensesList";

interface ExpensesProps {
    expenses: Expense[];
}

export const Expenses: React.FC<ExpensesProps> = (props) => {
    const [expenseYear, setExpenseYear] = useState(new Date().getFullYear());
    const filterChangeHandler = (filterYear: number) => {
        setExpenseYear(filterYear);
    };

    const filteredExpenses = props.expenses.filter((e) => e.date.getFullYear() === expenseYear);
    return (
        <div>
            <Card className='expenses' data-testid='expenses'>
                <ExpenseFilter onFilterChange={filterChangeHandler} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};
