import React from 'react'
import SearchBar from './SearchBar';
import { bgUrl } from '../utils/constants';
import MovieSuggestions from './MovieSuggestions';

const Search = () => {
  return (
    <>
        <div className='bg-linear-to-b from-black/60 h-screen'> 
            <img src={bgUrl} alt='Netflix Background'className='w-full object-cover h-screen absolute -z-10' />
            <SearchBar />
            <MovieSuggestions />
        </div>
    </>
  )
}
export default Search