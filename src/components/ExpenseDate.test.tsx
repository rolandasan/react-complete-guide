import { render, screen } from '@testing-library/react';
import { ExpenseDate } from './ExpenseDate';

test('render ExpenseDate component', () => {
    render(<ExpenseDate date={new Date(2021, 10, 12, 5, 13)} />);
    const expenseItemDate = screen.getByTestId('expense-item-date');
    expect(expenseItemDate).toBeInTheDocument();

    const expenseItemDateYear = screen.getByTestId('expense-item-date-year');
    expect(expenseItemDateYear).toBeInTheDocument();
    expect(expenseItemDateYear.textContent).toBe('2021');

    const expenseItemDateMonth = screen.getByTestId('expense-item-date-month');
    expect(expenseItemDateMonth).toBeInTheDocument();
    expect(expenseItemDateMonth.textContent).toBe('lapkritis');

    const expenseItemDateDay = screen.getByTestId('expense-item-date-day');
    expect(expenseItemDateDay).toBeInTheDocument();
    expect(expenseItemDateDay.textContent).toBe('12');
});
