import { CartContext } from './CartContext';
import { useReducer } from 'react';

interface Props {
    children: any;
}

interface CartState {
    items: MealOrder[];
    totalAmount: number;
}

export interface MealOrder {
    id: string;
    name: string;
    amount: number;
    price: number;
}

type ReducerAction = { type: 'ADD'; item: MealOrder } | { type: 'REMOVE'; id: string } | { type: 'CLEAR' };

const defaultCartState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state: CartState, action: ReducerAction): CartState => {
    let updatedTotalAmount;
    let existingItemIndex;
    let updatedItems;

    switch (action.type) {
        case 'ADD':
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

            if (existingItemIndex !== -1) {
                const updatedItem = {
                    ...state.items[existingItemIndex],
                    amount: state.items[existingItemIndex].amount + action.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        case 'REMOVE':
            existingItemIndex = state.items.findIndex((item) => item.id === action.id);
            const existingItem = state.items[existingItemIndex];
            updatedTotalAmount = state.totalAmount - existingItem.price;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter((item) => item.id !== action.id);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        case 'CLEAR':
            return defaultCartState;
    }
    return defaultCartState;
};

export const CartProvider = (props: Props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: MealOrder) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };
    const removeItemFromCart = (id: string) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };
    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' });
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
        clearCart: clearCartHandler,
    };
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
