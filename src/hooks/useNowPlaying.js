import { API_Options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/movieSlice';

const useNowPlaying = () => {
     // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
    const data = await response.json();
    //console.log(data.results);
    dispatch(addNowPlaying(data.results));
  }

  // calling inside useEffect because we want to call it when the component mounts (like component render only once)
  useEffect(() => {
    getNowPlaying();
  }, []); // empty dependency array means it runs only once when component mounts

}

export default useNowPlaying;