import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const HeaderBorderBottom = () => {
  return <div className={cx('border')} />;
};
