import React from 'react'
import { Play, Info } from 'lucide-react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='px-8 md:px-16 absolute top-0 text-white bg-gradient-to-r from-black/50 to-black/30 w-full h-screen'>
            <div className='pt-36 lg:pt-48 2xl:pt-60'>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{title}</h1>
                <p className="hidden sm:block mt-2 md:mt-4 w-7/12 md:w-6/12 lg:w-4/12 text-xs md:text-sm">{overview}</p>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <button className='bg-white font-semibold px-5 py-2 rounded-md text-black text-sm flex items-center gap-2 hover:bg-white/90'><Play className='w-5 h-5' />Play</button>
                <button className='bg-black font-semibold px-5 py-2 rounded-md text-white text-sm flex items-center gap-2 hover:bg-black/90'><Info className='w-5 h-5' /> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle