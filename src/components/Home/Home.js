import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './home.module.scss';
import MovieListing from '../MovieListing';
import { fetchAsyncMovies, fetchAsyncShows, getAllMovie, getAllShow } from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);

const Home = () => {
    const dispatch = useDispatch();
    const movieState = useSelector(getAllMovie);
    const showState = useSelector(getAllShow);
    const movieAndShowState = Object.keys(movieState).length === 0 && Object.keys(showState).length === 0;
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            {movieAndShowState ? <div className={cx('Loading')}>Loading ...</div> : <MovieListing />}
        </div>
    );
};

export default Home;
