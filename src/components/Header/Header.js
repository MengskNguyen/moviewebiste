import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fetchAsyncMovies, fetchAsyncShows } from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);

const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTerm = term.trim();
        if (trimmedTerm === '') {
            alert('Please enter search term');
            return;
        }
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm('');
    };
    const handleChange = (input) => {
        setTerm(input);
    };
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <div className={cx('logo')}>Movie App</div>
            </Link>
            <div className={cx('search')}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search for movies or shows"
                        onChange={(e) => {
                            handleChange(e.target.value);
                        }}
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
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
