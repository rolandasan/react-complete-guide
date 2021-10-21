import React from 'react';
import './App.css';
import { ExpenseItem } from './components/ExpenseItem';

export const App: React.FC = () => {
    return (
        <div className='App'>
            <h2>Lets get started!</h2>
            <ExpenseItem />
            <ExpenseItem />
            <ExpenseItem />
        </div>
    );
};
