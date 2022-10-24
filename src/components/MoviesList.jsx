import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = props => {
  const { movies } = props;

  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MoviesList;