import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBg = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.heroTrailerVideo);
    useTrailerVideo(movieId);
    return (
        <div className=''>
            <iframe className='w-full h-full lg:h-screen aspect-video' //?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0`} title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBg