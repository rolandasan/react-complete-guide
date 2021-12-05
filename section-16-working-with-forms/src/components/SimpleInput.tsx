import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';

export const SimpleInput: React.FC = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
    const inputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    };

    const inputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        setEnteredNameTouched(true);
    };

    const formSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if (!enteredNameIsValid) {
            return;
        }
        setEnteredName('');
        setEnteredNameTouched(false);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={inputChangeHandler} onBlur={inputBlurHandler} value={enteredName} />
                {nameInputInvalid && <p className='error-text'>Name must be not empty</p>}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};
