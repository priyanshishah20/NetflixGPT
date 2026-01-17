import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    //console.log(movies)
    
    if (!movies || movies.length === 0) {
        return <div>No movies available</div>;
    }
    return (
        <div className='pl-8 md:pl-16 mt-6'>
            <h2 className='text-lg font-medium mb-3'>{title}</h2>

            <div className='flex gap-x-3 overflow-auto scrollbar-hide'>
                {movies?.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList