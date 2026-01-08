import React from 'react'
import { useSelector } from 'react-redux'
import { imageBaseURL } from '../utils/constants'
import MovieList from './MovieList';

const MovieSuggestions = () => {
  const { movieNames, movieResults, poster_path } = useSelector(store => store.gpt);
  if (!movieResults) return null; // No results to show (show nice UI)
  // if(!poster_path) return null;

  return (
    <div className='bg-black/70 '>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-3 pt-4'>
        {movieResults.map((movie) => (
          <>
            <div key={movie.id} className='bg-black rounded-md'>
              {movie.poster_path ?
                <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.original_title} className='rounded-md' />
                : <div className='text-center'>No poster available</div>}
              <div className='word-break-all'>{movie.original_title}</div>
            </div>
            {/* <MovieList key={movie.id} title={movie.original_title} movies={movieResults} /> */}
          </>
        ))}
      </div>
    </div>
  )
}

export default MovieSuggestions