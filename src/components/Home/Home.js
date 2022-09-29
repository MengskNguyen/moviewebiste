import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './home.module.scss';
import MovieListing from '../MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-img')}></div>
            <MovieListing />
        </div>
    );
};

export default Home;
