import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

export const SimpleInput: React.FC = () => {
    const [enteredName, setEnteredName] = useState('');

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    };

    const formSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        console.debug(enteredName);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={inputChangeHandler} />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};
