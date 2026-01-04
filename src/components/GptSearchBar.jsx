import React from 'react'
import { Search } from 'lucide-react';
import langConstants from '../utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <>
    <div className='pt-32'>
    <div className='w-6/12 mx-auto bg-black/80 p-8 border border-gray-500 rounded-md'>
    <form className='flex gap-4'>
        <input type="text" placeholder={langConstants[langKey].gptSearchPlaceholder} className="w-full px-3 py-1.5 text-base rounded-md border border-gray-400"/>
        <button className='text-sm bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1.5 rounded-md flex items-center gap-2'>
            <Search className='w-5 h-5' /> {langConstants[langKey].search}</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default GptSearchBar