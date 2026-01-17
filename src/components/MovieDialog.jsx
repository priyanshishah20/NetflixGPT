import React, { useState } from 'react'
import { closeDialog } from '../utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Play, ArrowDownToLine, X } from 'lucide-react'
import useMovieTrailer from '../hooks/useMovieTrailer'

const MovieDialog = () => {
  const dispatch = useDispatch();
  const { showDialog, selectedMovie } = useSelector(store => store.movies)
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(selectedMovie?.id);

  const [playVideo, setPlayVideo] = useState(false);
  if (!showDialog) return null;


  const handlePlayVideo = () => {
    setPlayVideo(true);
  }

  return (
    <>
      <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
        <div className='bg-black text-white w-10/12 rounded-lg relative'>
          <X onClick={() => { setPlayVideo(false); dispatch(closeDialog())}}
            className='absolute top-2 right-2 w-7 h-7 text-white cursor-pointer text-4xl hover:bg-white/20 p-1 rounded-full' />
  
          <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-4 pt-0 md:pt-4 p-4'>
            {trailerVideo ? (
              <iframe className='w-full h-75'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=${playVideo ? 1 : 0}&controls=0&modestbranding=1&rel=0`} title="YouTube video player"
                allow="autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"></iframe>
            ) : (
              <div className='w-full h-75 bg-white/50 animate-pulse rounded'></div>
            )}
            <div className='flex flex-col justify-center items-start'>
              <h2 className='font-bold text-2xl'>{selectedMovie?.title}</h2>
              <div className='flex items-center gap-3 my-4'>
                <button onClick={handlePlayVideo}
                  className='bg-white font-semibold px-5 py-1.5 rounded-md text-black text-sm flex items-center gap-2 hover:bg-white/90'><Play className='w-4 h-4' />Play</button>
                <button className='bg-gray-500 font-semibold px-5 py-1.5 rounded-md text-white text-sm flex items-center gap-2 hover:bg-gray-500/90'><ArrowDownToLine className='w-4 h-4' /> Download</button>
              </div>
              <p className='text-sm text-white/80'>{selectedMovie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDialog