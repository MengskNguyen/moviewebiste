import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <div className={cx('logo')}>Movie App</div>
            </Link>
            <div className={cx('user')}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTelYHveqZayrc7gSM2McjQlFQVsBrKyEREg&usqp=CAU"
                    alt="user"
                />
            </div>
        </div>
    );
};

export default Header;
