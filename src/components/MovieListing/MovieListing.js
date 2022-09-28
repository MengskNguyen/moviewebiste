import React from 'react';
import classNames from 'classnames/bind';
import styles from './movieListing.module.scss';

const cx = classNames.bind(styles);
const MovieListing = () => {
    return <div className={cx('wrapper')}>Movie listing</div>;
};

export default MovieListing;
