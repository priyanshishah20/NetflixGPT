import React, { useRef } from 'react'
import { Search } from 'lucide-react';
import langConstants from '../utils/langConstants';
import { useSelector } from 'react-redux';
import client from '../utils/openai';
import { APIOptions } from '../utils/constants';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchTxt = useRef('');

    const searchMovieTMDB = async (movieName) => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, APIOptions);
      const data = await response.json();
      console.log("TMDB Search Data:", data.results);
      return data.results;
    }
    // const gptSearchPrompt =`Act as a movie recommendation system and suggest some movies
    // for the query: ${searchTxt.current.value}. Only give me names of 5 movies with coma separated. 
    // Example output: Movie1, Movie2, Movie3, Movie4, Movie5.`;

    const handleGptSearch = async (e) => {
        e.preventDefault();
        const searchMovieName = searchTxt.current.value;
        console.log("Movie:", searchMovieName);
        // make an API call to GPT and get movie results
        // const completion = await client.chat.completions.create({
        //   model: 'gpt-3.5-turbo',
        //   messages: [
        //   { role: 'user', content: gptSearchPrompt },
        //   ],
        // });
        // console.log(completion.choices);
        // if(!movieName){
        //     alert("Please enter a movie name");
        //     return;
        // }

        // get movie details from TMDB
        searchMovieTMDB(searchMovieName);
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

export default GptSearchBar