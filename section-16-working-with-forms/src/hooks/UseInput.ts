import { FocusEvent, ChangeEvent, useState } from 'react';

export const useInput = (
    validateValue: (value: string) => boolean,
): {
    value: string;
    isValid: boolean;
    hasError: boolean;
    valueChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    inputBlurHandler: (event: FocusEvent<HTMLInputElement>) => void;
    resetInput: () => void;
} => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (_event: ChangeEvent<HTMLInputElement>) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        inputBlurHandler: inputBlurHandler,
        resetInput: reset,
    };
};
