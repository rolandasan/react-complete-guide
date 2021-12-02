import React, { useCallback, useEffect, useState } from 'react';

import { MoviesList } from './components/MoviesList';
import './App.css';
import { AddMovie } from './components/AddMovie';

export const App: React.FC = () => {
    const [movies, setMovies] = useState<{ id: string; title: string; openingText: string; releaseDate: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<any>(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch('https://react-section-14-f69e8-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
            if (!response.ok) {
                throw new Error('Something wrong');
            }

            const data = await response.json();
            console.debug(data);

            const loadedMovies: {
                id: string;
                title: string;
                openingText: string;
                releaseDate: string;
            }[] = [];
            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }

            setMovies(loadedMovies);
        } catch (error) {
            setIsError((error as Error).message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    async function addMovieHandler(movie: any) {
        const response = await fetch('https://react-section-14-f69e8-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.debug(data);
    }

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (isError) {
        content = <p>{isError}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    );
};
