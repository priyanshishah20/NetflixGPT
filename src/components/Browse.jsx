import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComing from '../hooks/useUpComing';
import useTopRated from '../hooks/useTopRated';
import Search from './Search';
import { useSelector } from 'react-redux';

const Browse = () => {
  const movieSearch = useSelector(store => store.search.searchView);

  useNowPlaying();
  usePopularMovies();
  useUpComing();
  useTopRated();
 
  return (
    <>
      <Header />
      {movieSearch ? <Search /> : 
      (<>
      <MainContainer />
      <SecondaryContainer />
      </>)}
    </>
  )
}

export default Browse