import cn from 'classnames/bind';

import { AppRoutes } from './AppRoutes';

import styles from './styles.module.css';

const cx = cn.bind(styles);

function App() {
  return (
    <div className={cx('page')}>
      <AppRoutes />
    </div>
  );
}

export default App;
