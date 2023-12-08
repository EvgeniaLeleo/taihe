import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';

import styles from './styles.module.css';
import { BUTTON_TYPE } from '../../constants';

const cx = cn.bind(styles);

export const LinkWrapper = ({
  className,
  isInline = false,
  isUnderline = true,
  linkText = '',
  linkUrl = '',
  onClick = '',
  target = 'blank',
  type = 'a',
}) => {
  return (
    <div
      className={cx(
        className,
        'link-wrapper',
        { 'link_double-underline': isUnderline },
        { link_underline: !isUnderline },
        { link_inline: isInline },
      )}
    >
      {type === 'a' && target === 'blank' && (
        <a className={cx('link')} href={linkUrl} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      )}
      {type === 'a' && target === 'current' && (
        <a className={cx('link')} href={linkUrl}>
          {linkText}
        </a>
      )}
      {type === 'nav' && (
        <NavLink className={cx('link')} to={linkUrl}>
          {linkText}
        </NavLink>
      )}
      {type === BUTTON_TYPE.button && (
        <button className={cx('button')} onClick={onClick}>
          {linkText}
        </button>
      )}
    </div>
  );
};
