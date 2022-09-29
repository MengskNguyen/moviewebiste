import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '~/common/apis/movieApi';
import { APIkey } from '~/common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = 'Harry';
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    // console.log(response.data);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('show/fetchAsyncShows', async () => {
    const showText = 'Friends';
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${showText}&type=series`);
    // console.log(response.data);
    return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    // console.log(response.data);
    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched successfully');
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('Fetched successfully');
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('Fetched successfully');
            return { ...state, selectedMovieOrShow: payload };
        },
    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovie = (state) => state.movies.movies;
export const getAllShow = (state) => state.movies.shows;
export const getSelectedMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
