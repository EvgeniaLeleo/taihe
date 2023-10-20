import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const MainWrapper = ({ children, type }) => {
  return <div className={cx('main-wrapper', { 'main-wrapper_sub': type === 'sub' })}>{children}</div>;
};
