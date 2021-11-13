import React from 'react';
import './App.css';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Meals />
            </main>
        </>
    );
};
