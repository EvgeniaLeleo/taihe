import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const LinkWrapper = ({ className, type = 'a', linkText = '', linkUrl = '' }) => {
  return (
    <div className={cx('link-underline')}>
      {type === 'a' && (
        <a className={className} href={linkUrl} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      )}
      {type === 'nav' && (
        <NavLink className={className} to={linkUrl}>
          {linkText}
        </NavLink>
      )}
    </div>
  );
};
