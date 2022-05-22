import React from 'react';
import { MealOrder } from './CartProvider';

interface contextValue {
    items: MealOrder[];
    totalAmount: number;
    addItem: (item: MealOrder) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

const defaultValue: contextValue = {
    items: [],
    totalAmount: 0,
    addItem: (_item: MealOrder) => {},
    removeItem: (_id: string) => {},
    clearCart: () => {},
};
export const CartContext = React.createContext(defaultValue);
