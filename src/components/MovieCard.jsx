import React from 'react'
import { imageBaseURL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { openDialog } from '../utils/movieSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleMovieInfo = () => {
   // console.log('clicked');
    dispatch(openDialog(movie))
  }

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div onClick={() => handleMovieInfo()} className='w-36 shrink-0 cursor-pointer'>
          <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} className='rounded-md' />
        </div>
        <div>
          <p>{movie.title}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard