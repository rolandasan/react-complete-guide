import React, {useState} from 'react';

import './App.css';
import {Button} from "./components/UI/Button/Button";

export const App: React.FC = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const toggleParagraphHandler = () => {
        setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }

    return (
        <div className='app'>
            <h1>Hi there!</h1>
            {showParagraph && <p>This is new!</p>}
            <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
        </div>
    );
};
