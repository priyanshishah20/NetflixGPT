import React from 'react'
import { imageBaseURL } from '../utils/constants'

const MovieCard = ({ posterPath, title }) => {
  return (
      <div className='w-36 shrink-0'>
        <img src={`${imageBaseURL}${posterPath}`} alt={title} className='rounded-md' />
    </div>
  )
}

export default MovieCard