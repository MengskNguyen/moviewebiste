import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './movieCard.module.scss';

const cx = classNames.bind(styles);

const MovieCard = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/movie/:${data.imdbID}`}>
                <h2 className={cx('container')}>
                    <div className={cx('top')}>
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('info')}>
                            <h4>{data.Title}</h4>
                            <p>{data.Year}</p>
                        </div>
                    </div>
                </h2>
            </Link>
        </div>
    );
};

export default MovieCard;
