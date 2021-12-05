import React, { FormEvent } from 'react';
import { useInput } from '../hooks/UseInput';

const isNotEmpty = (value: string): boolean => value.trim() !== '';
const isValidEmail = (value: string): boolean => value.includes('@');

export const BasicForm: React.FC = () => {
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        resetInput: firstNameInputReset,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        resetInput: lastNameInputReset,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: emailInputReset,
    } = useInput((value) => isNotEmpty(value) && isValidEmail(value));

    const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    let isFormValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        isFormValid = true;
    }

    const submitHandler = (event: FormEvent): void => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }
        firstNameInputReset();
        lastNameInputReset();
        emailInputReset();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className='form-control'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        className={firstNameClasses}
                        type='text'
                        id='firstName'
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={firstNameValue}
                    />
                    {firstNameInputHasError && <p className='error-text'>Please enter first name</p>}
                </div>
                <div className='form-control'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        className={lastNameClasses}
                        type='text'
                        id='lastName'
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={lastNameValue}
                    />
                    {lastNameInputHasError && <p className='error-text'>Please enter last name</p>}
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>E-Mail Address</label>
                <input
                    className={emailClasses}
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailValue}
                />
                {emailInputHasError && <p className='error-text'>Please enter valid email address</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};
