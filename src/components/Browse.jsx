import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComing from '../hooks/useUpComing';
import useTopRated from '../hooks/useTopRated';

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useUpComing();
  useTopRated();
 
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse