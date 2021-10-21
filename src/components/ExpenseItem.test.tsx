import React from 'react';
import {render, screen} from '@testing-library/react';
import {ExpenseItem} from "./ExpenseItem";

test('render ExpenseItem component', () => {
    render(<ExpenseItem/>);
    const testedElement = screen.getByTestId('expense-item');
    expect(testedElement).toBeInTheDocument();
    expect(screen.getByTestId('expense-item-description')).toBeInTheDocument();
    expect(screen.getByTestId('expense-item-date')).toBeInTheDocument();
    expect(screen.getByTestId('expense-item-price')).toBeInTheDocument();
})