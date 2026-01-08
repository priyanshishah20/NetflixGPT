import { APIOptions } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRated } from '../utils/movieSlice';

const useTopRated = () => {
     // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const top_rated = useSelector(store => store.movies.topRated);
  const getTopRated = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', APIOptions);
    const data = await response.json();
    //console.log('Top Rated', data.results);
    dispatch(addTopRated(data.results));
  }

  useEffect(() => {
    !top_rated && getTopRated();
  }, []); 

}

export default useTopRated;