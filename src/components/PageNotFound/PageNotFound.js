import React from 'react';
import classNames from 'classnames/bind';
import styles from './pageNotFound.module.scss';

const cx = classNames.bind(styles);
const PageNotFound = () => {
    return <div className={cx('wrapper')}>Page Not Found</div>;
};

export default PageNotFound;
