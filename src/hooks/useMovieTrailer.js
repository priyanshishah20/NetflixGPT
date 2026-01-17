import { APIOptions } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';


const useMovieTrailer = (movieId) => {

     const dispatch = useDispatch();
    //  const trailer_video = useSelector(store => store.movies.trailerVideo);
    // fetch video background based on movieId
    const getMovieTrailer = async () => {
        if(!movieId) return  null;
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, APIOptions);
        const data = await response.json();
        // console.log(data.results);

        if (data.results && data.results.length > 0) {
            const filterVideo = data.results.filter((video) => video.type === 'Trailer');
            const trailer = filterVideo.length > 0 ? filterVideo[0] : data.results[0]; // if no trailer found, show first video
            //console.log(trailer);
            dispatch(addMovieTrailer(trailer));
        }
    }
    useEffect(() => {
        if(!movieId) return;
        getMovieTrailer();
    }, [movieId, dispatch]);
}

export default useMovieTrailer;