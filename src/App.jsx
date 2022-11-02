import { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    await fetch('https://swapi.dev/api/films/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        const transformedData = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });

        setMovies(transformedData);
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

export default App;
