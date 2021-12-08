import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import { Card } from '../UI/Card';
import { Meal } from '../../model/Meal';
import { MealItem } from './MealItem/MealItem';

export const AvailableMeals: React.FC = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState<string>('');

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-complete-guide-63504-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setIsError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading ....</p>
            </section>
        );
    }

    if (isError) {
        return (
            <section className={classes.MealsError}>
                <p>{isError}</p>
            </section>
        );
    }
    const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};
