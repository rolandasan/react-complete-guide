import React, { useCallback, useEffect, useState } from 'react';

import { MoviesList } from './components/MoviesList';
import './App.css';

export const App: React.FC = () => {
    const [movies, setMovies] = useState<{ id: number; title: string; openingText: string; releaseDate: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<any>(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            if (!response.ok) {
                throw new Error('Something wrong');
            }

            const data = await response.json();
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
        } catch (error) {
            setIsError((error as Error).message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    return (
        <>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
                {!isLoading && movies.length === 0 && !isError && <p>No movies</p>}
                {isLoading && <p>Loading data</p>}
                {!isLoading && isError && <p>{isError}</p>}
            </section>
        </>
    );
};
