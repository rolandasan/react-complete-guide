import React from 'react';
import {render, screen} from '@testing-library/react';
import {ExpenseItem} from "./ExpenseItem";

test('render ExpenseItem component', () => {
    render(<ExpenseItem title='expense title' amount={10.4} date={new Date(2021, 10, 12, 5,13)}/>);
    const expenseItemComponent = screen.getByTestId('expense-item');
    expect(expenseItemComponent).toBeInTheDocument();

    const expenseItemDescription = screen.getByTestId('expense-item-description');
    expect(expenseItemDescription).toBeInTheDocument();
    expect(expenseItemDescription.textContent).toBe('expense title');

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

    const expenseItemAmount = screen.getByTestId('expense-item-price')
    expect(expenseItemAmount).toBeInTheDocument();
    expect(expenseItemAmount.textContent).toBe('€10.4');
})