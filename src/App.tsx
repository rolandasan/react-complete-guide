import React from 'react';
import './App.css';
import {ExpenseItem} from './components/ExpenseItem';

export const App: React.FC = () => {
    const expenses: { title: string, amount: number, date: Date }[] = [
        {title: 'Car Insurance', amount: 30, date: new Date(2021, 2, 4)},
        {title: 'Car Tires', amount: 245.3, date: new Date(2020, 4, 4)},
        {title: 'Car Wash', amount: 29.9, date: new Date(2021, 8, 4)},
        {title: 'Car repair', amount: 459.4, date: new Date(2021, 11, 4)},
    ];

    return (
        <div className='App'>
            <h2>Lets get started!</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </div>
    );
};
