import './Card.css';
import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{ 'data-testid': string; className: string }>;

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={'card ' + props.className} data-testid={props['data-testid']}>
            {props.children}
        </div>
    );
};
