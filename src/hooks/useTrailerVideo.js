import { API_Options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';


const useTrailerVideo = (movieId) => {

     const dispatch = useDispatch();
    // fetch video background based on movieId
    const getTrailer = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_Options);
        const data = await response.json();
        // console.log(data.results);

        if (data.results && data.results.length > 0) {
            const filterVideo = data.results.filter((video) => video.type === 'Trailer');
            const trailer = filterVideo.length > 0 ? filterVideo[0] : data.results[0]; // if no trailer found, show first video
            //console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        }
    }
    useEffect(() => {
        getTrailer();
    }, [movieId]);
}

export default useTrailerVideo;