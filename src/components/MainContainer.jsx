import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlaying);
    //console.log(movies);

    // pick the movie to be shown in the main container
    const mainMovie = movies && movies.length > 0 ? movies[1] : null;

    const {title, overview, id} = mainMovie || {};
  return (
    <div className='relative'>
        <VideoBg movieId={id} />
        <VideoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer