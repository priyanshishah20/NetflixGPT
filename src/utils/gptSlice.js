import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptSearchView: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.gptSearchView = !state.gptSearchView;
        },
        addMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

// export actions
export const { toggleGptSearchView, addMovieResults } = gptSlice.actions;

export default gptSlice.reducer;