import React, { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import './App.css';

export const App: React.FC = () => {
    const [movies, setMovies] = useState<{ id: number; title: string; openingText: string; releaseDate: string }[]>([]);

    const fetchMoviesHandler = () => {
        fetch('https://swapi.dev/api/films')
            .then((response) => response.json())
            .then((data) => {
                const transformedMovies = data.results.map(
                    (movie: { episode_id: number; title: string; opening_crawl: string; release_date: string }) => {
                        return {
                            id: movie.episode_id,
                            title: movie.title,
                            openingText: movie.opening_crawl,
                            releaseDate: movie.release_date,
                        };
                    },
                );
                setMovies(transformedMovies);
            });
    };

    return (
        <>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </>
    );
};
