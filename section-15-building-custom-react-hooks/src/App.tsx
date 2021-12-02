import React from 'react';
import { BackwardCounter } from './components/BackwardCounter';
import { ForwardCounter } from './components/ForwardCounter';

export const App: React.FC = () => {
    return (
        <>
            <ForwardCounter />
            <BackwardCounter />
        </>
    );
};
