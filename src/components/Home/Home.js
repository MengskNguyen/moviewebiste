import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';

const cx = classNames.bind(styles);
const Home = () => {
    return <div className={cx('wrapper')}>Home</div>;
};

export default Home;
