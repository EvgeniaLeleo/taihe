import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const MainWrapper = ({ children }) => {
  return <div className={cx('main-wrapper')}>{children}</div>;
};
