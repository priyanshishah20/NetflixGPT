import React, { useRef } from 'react'
import { Search } from 'lucide-react';
import langConstants from '../utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import client from '../utils/openai';
import { APIOptions } from '../utils/constants';
import { addMovieResults } from '../utils/gptSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchTxt = useRef('');

    const searchMovieTMDB = async (movieName) => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, APIOptions);
      const data = await response.json();
      console.log("TMDB Search Data:", data.results);
      return data.results;
    }

    const handleGptSearch = async (e) => {
        e.preventDefault();
        const searchQuery = searchTxt.current.value;
        console.log("Movie Array lists:", searchQuery);

        // get movie details from TMDB
        const movieData = await searchMovieTMDB(searchQuery);
        const movieNames = movieData.map(movie => movie.original_title).join(', ');
        console.log("Movie Names:", movieNames);
        dispatch(addMovieResults({movieNames: movieNames, movieResults: movieData}));

    }
  return (
    <>
    <div className='pt-32'>
    <div className='w-6/12 mx-auto bg-black/80 p-8 border border-gray-500 rounded-md'>
    <form className='flex gap-4'>
        <input type="text" ref={searchTxt}
        placeholder={langConstants[langKey].gptSearchPlaceholder} className="w-full px-3 py-1.5 text-base rounded-md border border-gray-400"/>
        <button onClick={handleGptSearch}
        className='text-sm bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1.5 rounded-md flex items-center gap-2'>
            <Search className='w-5 h-5' /> {langConstants[langKey].search}</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default SearchBar