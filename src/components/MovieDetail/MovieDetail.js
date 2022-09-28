import React from 'react';
import classNames from 'classnames/bind';
import styles from './movieDetail.module.scss';

const cx = classNames.bind(styles);

const MovieDetail = () => {
    return <div className={cx('wrapper')}>MovieDetail</div>;
};

export default MovieDetail;
