import React, { FormEvent, PropsWithChildren } from 'react';

import './Button.css';

export const Button: React.FC<
    PropsWithChildren<{
        type: 'submit' | 'reset' | 'button';
        onClick?: (event: FormEvent) => void;
    }>
> = (props) => {
    return (
        <button type={props.type} className='button' onClick={props.onClick}>
            {props.children}
        </button>
    );
};
