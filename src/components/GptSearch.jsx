import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSuggestions from './GptSuggestions';
import { bgUrl } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
        <div className='bg-linear-to-b from-black/60 h-screen'> 
            <img src={bgUrl} alt='Netflix Background'className='w-full object-cover h-screen absolute -z-10' />
            <GptSearchBar />
            <GptSuggestions />
        </div>
    </>
  )
}

export default GptSearch