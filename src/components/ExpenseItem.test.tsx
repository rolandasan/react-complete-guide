import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpenseItem } from './ExpenseItem';
import { Expense } from '../models/Expense';

test('render ExpenseItem component', () => {
    const expenseTestItem: Expense = {
        id: '1',
        title: 'expense title',
        amount: 10.4,
        date: new Date(2021, 10, 12, 5, 13),
    };

    render(<ExpenseItem expense={expenseTestItem} />);
    const expenseItemComponent = screen.getByTestId('expense-item');
    expect(expenseItemComponent).toBeInTheDocument();

    const expenseItemDate = screen.getByTestId('expense-item-date');
    expect(expenseItemDate).toBeInTheDocument();

    const expenseItemDescription = screen.getByTestId('expense-item-description');
    expect(expenseItemDescription).toBeInTheDocument();
    expect(expenseItemDescription.textContent).toBe('expense title');

    const expenseItemAmount = screen.getByTestId('expense-item-price');
    expect(expenseItemAmount).toBeInTheDocument();
    expect(expenseItemAmount.textContent).toBe('€10.4');
});
