import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchView: false,
        movieNames: null,
        movieResults: null,
        isLoading: false
    },
    reducers: {
        toggleSearchView: (state) => {
            state.searchView = !state.searchView;
        },
        addMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

// export actions
export const { toggleSearchView, addMovieResults, setLoading } = searchSlice.actions;

export default searchSlice.reducer;