import classNames from 'classnames/bind';
import styles from './app.module.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <h3>Movie Website</h3>
        </div>
    );
}

export default App;
