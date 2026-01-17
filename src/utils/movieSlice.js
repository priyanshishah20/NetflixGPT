import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        heroTrailerVideo: null,
        trailerVideo: null,
        popularMovies: null,
        upComing: null,
        topRated: null,
        selectedMovie: null,
        showDialog: false
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addHeroTrailerVideo: (state, action) => {
            state.heroTrailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComing: (state, action) => {
            state.upComing = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.trailerVideo = action.payload
        },
        openDialog: (state, action) => {
            state.selectedMovie = action.payload;
            state.showDialog = true;
        },
        closeDialog: (state) => {
            state.selectedMovie = null;
            state.showDialog = false;
        }
    }
})

// export actions
export const { addNowPlaying, addHeroTrailerVideo, addPopularMovies, addUpComing, addTopRated, addMovieTrailer, openDialog, closeDialog } = movieSlice.actions;

export default movieSlice.reducer;