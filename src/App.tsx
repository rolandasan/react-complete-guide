import React, { useState } from 'react';
import './App.css';
import { Expense } from './models/Expense';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const initialExpenses: Expense[] = [
    { id: 'e1', title: 'Car Insurance', amount: 30, date: new Date(2021, 2, 4) },
    { id: 'e2', title: 'Car Tires', amount: 245.3, date: new Date(2020, 4, 4) },
    { id: 'e3', title: 'Car Wash', amount: 29.9, date: new Date(2021, 8, 4) },
    { id: 'e4', title: 'Car repair', amount: 459.4, date: new Date(2021, 11, 4) },
];

export const App: React.FC = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpenseHandler = (newExpense: Expense): void => {
        setExpenses((currentExpenses) => {
            return [...currentExpenses, newExpense];
        });
    };

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};
