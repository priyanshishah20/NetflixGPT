import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        trailerVideo: null,
        popularMovies: null,
        upComing: null,
        topRated: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComing: (state, action) => {
            state.upComing = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        }
    }
})

// export actions
export const { addNowPlaying, addTrailerVideo, addPopularMovies, addUpComing, addTopRated } = movieSlice.actions;

export default movieSlice.reducer;