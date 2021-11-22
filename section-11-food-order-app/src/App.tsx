import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
import { Cart } from './components/Cart/Cart';

export const App: React.FC = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    };
    const hideCartHandler = () => {
        setShowCart(false);
    };

    return (
        <>
            {showCart && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
};
