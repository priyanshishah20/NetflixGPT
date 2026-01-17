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
      <div onClick={() => handleMovieInfo()} className='w-36 shrink-0 cursor-pointer'>
          <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} className='rounded-md' />
        </div>
    </>
  )
}

export default MovieCard