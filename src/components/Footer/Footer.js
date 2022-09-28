import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div>Movie App</div>
            <div>2021, Movie, Inc. or its affiliates</div>
        </div>
    );
};

export default Footer;
