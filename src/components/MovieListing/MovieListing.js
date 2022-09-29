import React from 'react';
import classNames from 'classnames/bind';
import styles from './movieListing.module.scss';
import { useSelector } from 'react-redux';
import { getAllMovie, getAllShow } from '~/features/movies/movieSlice';
import MovieCard from '../MovieCard';

const cx = classNames.bind(styles);
const MovieListing = () => {
    const movies = useSelector(getAllMovie);
    const shows = useSelector(getAllShow);
    let renderMovies,
        renderShows = '';
    renderMovies = movies.Response ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
        })
    ) : (
        <div className={cx('movie-error')}>
            <h3>{movies.error}</h3>
        </div>
    );
    renderShows = shows.Response ? (
        shows.Search.map((shows, index) => {
            return <MovieCard key={index} data={shows} />;
        })
    ) : (
        <div className={cx('movie-error')}>
            <h3>{movies.error}</h3>
        </div>
    );
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <h4 className={cx('label')}>Movies</h4>
                <div className={cx('container')}>{renderMovies}</div>
            </div>
            <div className={cx('list')}>
                <h4 className={cx('label')}>Series</h4>
                <div className={cx('container')}>{renderShows}</div>
            </div>
        </div>
    );
};

export default MovieListing;
