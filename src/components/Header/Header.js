import React from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return <div className={cx('wrapper')}>Header</div>;
};

export default Header;
