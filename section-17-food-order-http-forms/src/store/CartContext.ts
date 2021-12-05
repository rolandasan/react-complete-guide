import React from 'react';
import { MealOrder } from './CartProvider';

interface contextValue {
    items: MealOrder[];
    totalAmount: number;
    addItem: (item: MealOrder) => void;
    removeItem: (id: string) => void;
}

const defaultValue: contextValue = {
    items: [],
    totalAmount: 0,
    addItem: (_item: MealOrder) => {},
    removeItem: (_id: string) => {},
};
export const CartContext = React.createContext(defaultValue);
