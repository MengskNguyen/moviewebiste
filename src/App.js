import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './app.module.scss';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';

const cx = classNames.bind(styles);

function App() {
    return (
        <Router>
            <div className={cx('app')}>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:imdbID" element={<MovieDetail />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
