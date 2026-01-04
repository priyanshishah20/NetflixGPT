import { APIOptions } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpComing } from '../utils/movieSlice';

const useUpComing = () => {
   // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getUpComing = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', APIOptions);
    const data = await response.json();
    //console.log('Upcoming', data.results);
    dispatch(addUpComing(data.results));
  }

  useEffect(() => {
    getUpComing();
  }, []); 

}

export default useUpComing;