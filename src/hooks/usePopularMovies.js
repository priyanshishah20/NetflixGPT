import { APIOptions } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
     // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const popular_movies = useSelector(store => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', APIOptions);
    const data = await response.json();
    //console.log('Popular', data.results);
    dispatch(addPopularMovies(data.results));
  }

  useEffect(() => {
    !popular_movies && getPopularMovies();
  }, []); 

}

export default usePopularMovies;