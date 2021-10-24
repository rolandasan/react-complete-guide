import { ExpenseForm } from './ExpenseForm';
import { render, screen } from '@testing-library/react';

test('render ExpenseForm component', () => {
    render(<ExpenseForm />);
    const expenseForm = screen.getByTestId('expense-form');
    expect(expenseForm).toBeInTheDocument();
});
