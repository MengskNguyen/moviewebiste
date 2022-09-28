import React from 'react';
import classNames from 'classnames/bind';
import styles from './movieListing.module.scss';
import { useSelector } from 'react-redux';
import { getAllMovie } from '~/features/movies/movieSlice';
import MovieCard from '../MovieCard';

const cx = classNames.bind(styles);
const MovieListing = () => {
    const movies = useSelector(getAllMovie);
    let renderMovies = '';
    renderMovies = movies.Response ? (
        movies.Search.map((movie, index) => {
            <MovieCard key={index} data={movie} />;
        })
    ) : (
        <div className={cx('movie-error')}>
            <h3>{movies.error}</h3>
        </div>
    );
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <div className={cx('container')}>{renderMovies}</div>
            </div>
        </div>
    );
};

export default MovieListing;
