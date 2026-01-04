import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComing from '../hooks/useUpComing';
import useTopRated from '../hooks/useTopRated';
import GptSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const shownGPTSearch = useSelector(store => store.gpt.gptSearchView);

  useNowPlaying();
  usePopularMovies();
  useUpComing();
  useTopRated();
 
  return (
    <>
      <Header />
      {shownGPTSearch ? <GptSearch /> : 
      (<>
      <MainContainer />
      <SecondaryContainer />
      </>)}
    </>
  )
}

export default Browse