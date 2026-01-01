import React from 'react'
import { imageBaseURL } from '../utils/constants'

const MovieCard = ({ posterPath, title }) => {
  return (
      <div className='w-36 shrink-0'>
        <img src={`${imageBaseURL}${posterPath}`} alt={title} />
    </div>
  )
}

export default MovieCard