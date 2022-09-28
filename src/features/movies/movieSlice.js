import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: {},
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            console.log(state);
            state.movies = action.payload;
        },
    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovie = (state) => state.movies.movies;
export default movieSlice.reducer;
