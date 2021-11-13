import React from 'react';
import classes from './MealItemForm.module.css';
import { Input } from '../../UI/Input';

interface Props {
    id: string;
}

export const MealItemForm: React.FC<Props> = (props) => {
    return (
        <form className={classes.form}>
            <Input
                inputLabel='Ammount'
                input={{
                    id: 'ammount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Add</button>
        </form>
    );
};
