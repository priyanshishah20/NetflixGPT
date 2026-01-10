import React from 'react'
import { useSelector } from 'react-redux'
import { imageBaseURL } from '../utils/constants'
import {OctagonX, CameraOff } from 'lucide-react'

const MovieSuggestions = () => {
  const { movieNames, movieResults, poster_path, isLoading } = useSelector(store => store.search);
  if (!movieResults) return
  'no movies found'; // No results to show (show nice UI)
  // if(!poster_path) return null;

  return (
    <>
      {isLoading? (
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {Array(12).fill(0).map((_, index) => (
          <div key={index} className='w-48 h-66 rounded-md animate-pulse bg-black'></div>
        ))}
        </div>
      )
      : !movieResults || movieResults.length === 0 ? (
        <div className='flex flex-col items-center gap-4 text-red-400 py-6 px-4 bg-black/80 w-8/12 mx-auto rounded-md'>
          <OctagonX className='w-8 h-8' />
          <div className='text-sm font-medium'>No movie suggestions found, try searching something else.</div>
          </div>
      ) : (  
      <div className='mx-4 mb-4'>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8'>
            {movieResults.map((movie) => (
                <div key={movie.id} className='bg-black rounded-md p-4 text-center flex flex-col justify-between items-center'>
                  {movie.poster_path ?
                    <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.original_title} className='rounded-md' />
                    : <div className='flex flex-col gap-4 items-center sm:mt-20'>
                      <CameraOff />
                      <div>No poster available</div>
                    </div>}
                  <div className='word-break-all'>{movie.original_title}</div>
                  {/* <MovieList key={movie.id} title={movie.original_title} movies={movieResults} /> */}
                </div>
              
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default MovieSuggestions