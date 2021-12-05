import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';

export const SimpleInput: React.FC = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [emailInputTouched, setEmailInputTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

    const validateEmail = (email: String): boolean => {
        // Email should contain @ symbol
        const atPosition = email.trim().indexOf('@');
        if (atPosition === -1) {
            return false;
        }
        // Email part after @ should be two text parts, seperated by . symbol
        // Email part after . sumbol should be at least two characters long
        const dotPosition = email.trim().indexOf('.', atPosition);
        return dotPosition !== -1 && email.trim().length > dotPosition + 2;
    };

    const enteredEmailIsValid: boolean = validateEmail(enteredEmail);
    const emailInputInvalid = !enteredEmailIsValid && emailInputTouched;
    const emailInputClasses = emailInputInvalid ? 'form-control invalid' : 'form-control';

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    };

    const nameBlurHandler = (_event: FocusEvent<HTMLInputElement>) => {
        setEnteredNameTouched(true);
    };

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(event.target.value);
    };

    const emailBlurHandler = (_event: FocusEvent<HTMLInputElement>) => {
        setEmailInputTouched(true);
    };

    const formSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }
        setEnteredName('');
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEmailInputTouched(false);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
                {nameInputInvalid && <p className='error-text'>Name must be not empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your email address</label>
                <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
                {emailInputInvalid && <p className='error-text'>Email must be not empty and valid email address</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};
