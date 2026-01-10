import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='-mt-22 pt-1 relative mb-4'>
      <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.upComing} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
    </div>
  )
}

export default SecondaryContainer