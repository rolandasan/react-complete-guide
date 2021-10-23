import React from 'react';
import { Chart } from '../Chart/Chart';
import { Expense } from '../../models/Expense';

interface ExpensesChartProps {
    expenses: Expense[];
}

export const ExpensesChart: React.FC<ExpensesChartProps> = (props) => {
    const chartDataPoints: { label: string; value: number }[] = [
        { label: 'Sausis', value: 0 },
        { label: 'Vasaris', value: 0 },
        { label: 'Kovas', value: 0 },
        { label: 'Balandis', value: 0 },
        { label: 'Gegužė', value: 0 },
        { label: 'Birželis', value: 0 },
        { label: 'Liepa', value: 0 },
        { label: 'Rugpjūtis', value: 0 },
        { label: 'Rugsėjis', value: 0 },
        { label: 'Spalis', value: 0 },
        { label: 'Lapkritis', value: 0 },
        { label: 'Gruodis', value: 0 },
    ];

    props.expenses.forEach((e) => {
        chartDataPoints[e.date.getMonth()].value += e.amount;
    });

    return <Chart data={chartDataPoints} />;
};
