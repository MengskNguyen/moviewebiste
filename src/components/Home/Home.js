import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './home.module.scss';
import MovieListing from '../MovieListing';
import movieApi from '~/common/apis/movieApi';
import { APIkey } from '~/common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);
const Home = () => {
    const search = 'Harry';
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIkey}&s=${search}&type=movie`).catch((err) => {
                console.log('Error: ', err);
            });
            // console.log(response.data);
            dispatch(addMovies(response.data));
        };

        fetchMovies();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-img')}></div>
            <MovieListing />
        </div>
    );
};

export default Home;
