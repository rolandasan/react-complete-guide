import React from 'react';
import { AvailableMeals } from './AvailableMeals';
import { MealsSummary } from './MealsSummary';

export const Meals: React.FC = () => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />
        </>
    );
};
