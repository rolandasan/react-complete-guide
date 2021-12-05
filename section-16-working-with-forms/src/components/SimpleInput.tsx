import React, { FormEvent } from 'react';
import { useInput } from '../hooks/UseInput';

export const SimpleInput: React.FC = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        resetInput: nameInputReset,
    } = useInput((value) => value.trim() !== '');

    const validateEmail = (email: String): boolean => {
        // Email should contain @ symbol
        const atPosition = email.trim().indexOf('@');
        if (atPosition === -1) {
            return false;
        }
        // Email part after @ should be two text parts, seperated by . symbol
        // Email part after . symbol should be at least two characters long
        const dotPosition = email.trim().indexOf('.', atPosition);
        return dotPosition !== -1 && email.trim().length > dotPosition + 2;
    };

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: emailInputReset,
    } = useInput(validateEmail);

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (nameInputHasError || emailInputHasError) {
            return;
        }
        nameInputReset();
        emailInputReset();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
                {nameInputHasError && <p className='error-text'>Name must be not empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your email address</label>
                <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
                {emailInputHasError && <p className='error-text'>Email must be not empty and valid email address</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};
