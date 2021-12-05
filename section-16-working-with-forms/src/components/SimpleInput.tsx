import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

export const SimpleInput: React.FC = () => {
    const [enteredName, setEnteredName] = useState('');
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    };

    const formSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.debug('onChange', enteredName);
        console.debug('ref', nameInputRef.current!.value);
    };

    const inputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={inputChangeHandler} ref={nameInputRef} />
                {!enteredNameIsValid && <p className='error-text'>Name must be not empty</p>}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};
