import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
    render(<App />);

    const newExpenseComponent = screen.getByTestId('new-expense');
    expect(newExpenseComponent).toBeInTheDocument();

    const expensesComponent = screen.getByTestId('expenses');
    expect(expensesComponent).toBeInTheDocument();
});
