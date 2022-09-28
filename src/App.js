import React from 'react';
import classNames from 'classnames/bind';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './app.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '~/components/Home';
import MovieDetail from '~/components/MovieDetail';
import PageNotFound from '~/components/PageNotFound';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <Router>
                <Header></Header>
                <div className={cx('container')}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:imdbID" element={<MovieDetail />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
