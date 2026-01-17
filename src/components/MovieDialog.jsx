import React from 'react'
import { closeDialog } from '../utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { imageBaseURL } from '../utils/constants'
import { Play, ArrowDownToLine } from 'lucide-react'
import useTrailerVideo from '../hooks/useTrailerVideo'

const MovieDialog = () => {
  const dispatch = useDispatch();
  const { showDialog, selectedMovie } = useSelector(store => store.movies)
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useTrailerVideo(selectedMovie?.id);

  if (!showDialog) return null;

  return (
    <>
      <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
        <div className='bg-black text-white w-10/12 rounded-lg relative'>
          <button onClick={() => dispatch(closeDialog())} className='absolute top-2 right-2 text-white text-4xl'>×</button>
          <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-4 pt-0 md:pt-4 p-4'>
            <iframe className='w-full h-75' 
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?&mute=1&controls=0&showinfo=0&rel=0`} title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"></iframe>
          <div className=''>
            {/* <img src={`${imageBaseURL}${selectedMovie?.poster_path}`} className='h-40 w-40' /> */}
          <h2 className='font-bold text-2xl'>{selectedMovie?.title}</h2>
          <div className='flex items-center gap-3 my-4'>
            <button className='bg-white font-semibold px-5 py-2 rounded-md text-black text-sm flex items-center gap-2 hover:bg-white/90'><Play className='w-4 h-4' />Play</button>
            <button className='bg-gray-500 font-semibold px-5 py-2 rounded-md text-white text-sm flex items-center gap-2 hover:bg-black/90'><ArrowDownToLine className='w-4 h-4' /> Download</button>
          </div>
          <p className='text-sm'>{selectedMovie?.overview}</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDialog