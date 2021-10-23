import React, { ChangeEvent, useState } from 'react';
import './ExpenseFilter.css';

interface ExpenseFilterProps {
    onFilterChange: (filterYear: number) => void;
}

export const ExpenseFilter: React.FC<ExpenseFilterProps> = (props) => {
    const [filterYear, setFilterYear] = useState(new Date().getFullYear());
    const onYearChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
        event.preventDefault();
        const filterValue = +event.target.value;
        setFilterYear(filterValue);
        props.onFilterChange(filterValue);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={filterYear} onChange={onYearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};
