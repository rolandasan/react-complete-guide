import React, { useState, useCallback } from 'react';

import './App.css';
import { Button } from './components/UI/Button/Button';
import { DemoOutput } from './components/Demo/DemoOutput';

export const App: React.FC = () => {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.debug('App');

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className='app'>
            <h1>Hi there!</h1>
            <DemoOutput showParagraph={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow toggle</Button>
            <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
        </div>
    );
};
