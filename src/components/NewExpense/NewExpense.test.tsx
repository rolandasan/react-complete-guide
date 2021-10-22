import { NewExpense } from './NewExpense';
import { render, screen } from '@testing-library/react';

test('render NewExpense component', () => {
    render(<NewExpense />);
    const newExpenseComponent = screen.getByTestId('new-expense');
    expect(newExpenseComponent).toBeInTheDocument()
    expect(newExpenseComponent.className).toBe('new-expense');
});
