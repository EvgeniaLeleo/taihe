import cn from 'classnames/bind';

import { BUTTON_TYPE } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const LinkButton = ({
  buttonUrl = '',
  children = '',
  className = '',
  size = 's',
  theme,
  type = BUTTON_TYPE.link,
  onClick = () => {},
}) => {
  if (type === BUTTON_TYPE.button) {
    return (
      <button
        className={cx(
          'link',
          className,
          { link_primary: theme === 'primary' },
          { link_secondary: theme === 'secondary' },
          { link_size_s: size === 's' },
          { link_size_m: size === 'm' },
          { link_size_l: size === 'l' },
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

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
