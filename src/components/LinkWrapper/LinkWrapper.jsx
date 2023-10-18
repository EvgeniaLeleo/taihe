import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const LinkWrapper = ({
  className,
  isUnderline = true,
  linkText = '',
  linkUrl = '',
  onClick = '',
  type = 'a',
}) => {
  return (
    <div
      className={cx(
        className,
        'link-wrapper',
        { 'link-double-underline': isUnderline },
        { 'link-underline': !isUnderline },
      )}
    >
      {type === 'a' && (
        <a className={cx('link')} href={linkUrl} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      )}
      {type === 'nav' && (
        <NavLink className={cx('link')} to={linkUrl}>
          {linkText}
        </NavLink>
      )}
      {type === 'button' && (
        <button className={cx('button')} onClick={onClick}>
          {linkText}
        </button>
      )}
    </div>
  );
};
