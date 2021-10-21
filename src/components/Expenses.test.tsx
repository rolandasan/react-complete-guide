import { render, screen } from '@testing-library/react';
import React from 'react';
import { Expenses } from './Expenses';
import { Expense } from '../models/Expense';

test('render Expenses component', () => {
    const expenseList: Expense[] = [
        { id: '1', title: 'expense 1', amount: 1.1, date: new Date(2021, 9, 21, 21, 25) },
        { id: '2', title: 'expense 2', amount: 2.2, date: new Date(2021, 2, 21, 15, 13) },
    ];

    render(<Expenses expenses={expenseList} data-testid='expenses' />);
    const expensesComponent = screen.getByTestId('expenses');
    expect(expensesComponent).toBeInTheDocument();

    expect(expensesComponent.childElementCount).toBe(2);
});
