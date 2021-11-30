import React from 'react';

import { Movie } from './Movie';
import classes from './MoviesList.module.css';

interface Props {
    movies: { id: number; title: string; openingText: string; releaseDate: string }[];
}

export const MoviesList: React.FC<Props> = (props) => {
    return (
        <ul className={classes['movies-list']}>
            {props.movies.map((movie) => (
                <Movie key={movie.id} title={movie.title} releaseDate={movie.releaseDate} openingText={movie.openingText} />
            ))}
        </ul>
    );
};
