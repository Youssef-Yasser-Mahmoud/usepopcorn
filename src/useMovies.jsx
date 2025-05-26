import { useEffect, useState } from 'react';

const KEY = 'ad35f149';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (query.length === 0) {
      return;
    }

    const controller = new AbortController();

    async function getData() {
      try {
        setIsLoading(true);
        setErrorMessage('');

        let res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

        if (!res.ok) {
          throw new Error('There is Something wrong in Your Network');
        }

        let data = await res.json();
        if (data.Response === 'False') {
          throw new Error(data.Error); // data.Error  === 'Movie not found!'
        }

        setMovies(data.Search);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setErrorMessage(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    // handleCloseMovie();
    getData();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, errorMessage };
}
