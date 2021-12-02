import classes from './Card.module.css';
import { PropsWithChildren } from 'react';

interface Props {}

export const Card: React.FC<PropsWithChildren<Props>> = (props) => {
    return <div className={classes.card}>{props.children}</div>;
};
