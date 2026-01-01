import { API_Options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
     // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_Options);
    const data = await response.json();
    //console.log('Popular', data.results);
    dispatch(addPopularMovies(data.results));
  }

  useEffect(() => {
    getPopularMovies();
  }, []); 

}

export default usePopularMovies;