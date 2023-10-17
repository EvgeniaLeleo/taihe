import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const LinkButton = ({ theme, buttonUrl = '', children = '', size = 's', className = '' }) => {
  return (
    <a
      href={buttonUrl}
      target="_blank"
      rel="noreferrer"
      className={cx(
        'link',
        className,
        { link_primary: theme === 'primary' },
        { link_secondary: theme === 'secondary' },
        { link_size_s: size === 's' },
        { link_size_m: size === 'm' },
        { link_size_l: size === 'l' },
      )}
    >
      {children}
    </a>
  );
};
