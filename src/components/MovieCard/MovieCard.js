import React from 'react';
import classNames from 'classnames/bind';
import styles from './movieCard.module.scss';

const cx = classNames.bind(styles);

const MovieCard = () => {
    return <div className={cx('wrapper')}>MovieCard</div>;
};

export default MovieCard;
