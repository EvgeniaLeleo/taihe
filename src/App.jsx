import cn from 'classnames/bind';

import styles from './styles.module.css';
import { AppRoutes } from './AppRoutes';

const cx = cn.bind(styles);

function App() {
  return (
    <div className={cx('page')}>
      <AppRoutes />
    </div>
  );
}

export default App;
