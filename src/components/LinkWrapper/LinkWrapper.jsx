import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const LinkWrapper = ({ className, isUnderline = true, linkText = '', linkUrl = '', type = 'a' }) => {
  return (
    <div className={cx('link', { 'link-double-underline': isUnderline }, { 'link-underline': !isUnderline })}>
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
