import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

export const Header: React.FC = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table of meals' />
            </div>
        </>
    );
};
