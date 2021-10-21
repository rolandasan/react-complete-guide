import React from 'react';
import './App.css';
import { ExpenseItem } from './components/ExpenseItem';
import { Expense } from './models/Expense';

export const App: React.FC = () => {
    const expenses: Expense[] = [
        { title: 'Car Insurance', amount: 30, date: new Date(2021, 2, 4) },
        { title: 'Car Tires', amount: 245.3, date: new Date(2020, 4, 4) },
        { title: 'Car Wash', amount: 29.9, date: new Date(2021, 8, 4) },
        { title: 'Car repair', amount: 459.4, date: new Date(2021, 11, 4) },
    ];

    return (
        <div className='App'>
            <h2>Lets get started!</h2>
            {expenses.map((e) => {
                return <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.date.getTime()} />;
            })}
        </div>
    );
};
