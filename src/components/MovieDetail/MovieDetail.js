import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './movieDetail.module.scss';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShowDetail } from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);

const MovieDetail = () => {
    let { imdbID } = useParams();
    if (imdbID[0] === ':') {
        imdbID = imdbID.slice(1);
    }
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShowDetail);
    console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    }, [dispatch, imdbID]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('title')}>{data.Title}</div>
                <div className={cx('rating')}>
                    <span>
                        IMDB rating
                        <FontAwesomeIcon style={{ display: 'inline' }} icon={faStar} />: {data.imdbRating}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
