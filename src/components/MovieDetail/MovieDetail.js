import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFilm, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import styles from './movieDetail.module.scss';
import {
    fetchAsyncMovieOrShowDetail,
    getSelectedMovieOrShowDetail,
    removeSelectedMovieOrShow,
} from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);

const MovieDetail = () => {
    let { imdbID } = useParams();
    if (imdbID[0] === ':') {
        imdbID = imdbID.slice(1);
    }
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShowDetail);
    // console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        };
    }, [dispatch, imdbID]);

    return (
        <div className={cx('wrapper')}>
            {/* Show loading if the data haven't loaded yet */}
            {Object.keys(data).length === 0 ? (
                <div>...loading</div>
            ) : (
                <>
                    <div className={cx('left')}>
                        <div className={cx('title')}>{data.Title}</div>
                        <div className={cx('rating')}>
                            <span>
                                IMDB rating
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />: {data.imdbRating}
                            </span>
                            <span>
                                IMDB Vote
                                <FontAwesomeIcon className={cx('thumbup')} icon={faThumbsUp} />: {data.Rated}
                            </span>
                            <span>
                                IMDB Runtime
                                <FontAwesomeIcon className={cx('film')} icon={faFilm} />: {data.Runtime}
                            </span>
                            <span>
                                IMDB Year
                                <FontAwesomeIcon className={cx('calendar')} icon={faCalendar} />: {data.Year}
                            </span>
                        </div>
                        <div className={cx('plot')}>{data.Plot}</div>
                        <div className={cx('info')}>
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <span>Genres</span>
                                <span>{data.Genre}</span>
                            </div>
                            <div>
                                <span>Language</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetail;
