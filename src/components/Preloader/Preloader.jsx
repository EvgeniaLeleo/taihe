import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Preloader = () => {
  return (
    <div className={cx('preloader-wrapper')}>
      <div className={cx('preloader')}>
        <svg className={cx('preloader-icon')} width="20" height="20" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 15a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm0-15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1ZM19 9h-3a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2ZM5 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Zm2.5 4.33a1 1 0 0 0-1.366.366l-1.5 2.598a1 1 0 0 0 1.732 1l1.5-2.598A1 1 0 0 0 7.5 14.33Zm5-8.66a1 1 0 0 0 1.366-.366l1.5-2.598a1 1 0 1 0-1.732-1l-1.5 2.598A1 1 0 0 0 12.5 5.67Zm5.794 7.964-2.598-1.5a1 1 0 0 0-1 1.732l2.598 1.5a1 1 0 0 0 1-1.732ZM1.706 6.366l2.598 1.5a1 1 0 1 0 1-1.732l-2.598-1.5a1 1 0 1 0-1 1.732Zm12.16 8.33a1 1 0 0 0-1.732 1l1.5 2.598a1 1 0 1 0 1.732-1l-1.5-2.598Zm-7.5-12.99a1 1 0 1 0-1.732 1l1.5 2.598a1 1 0 0 0 1.732-1l-1.5-2.598ZM14.33 7.5a1 1 0 0 0 1.366.366l2.598-1.5a1 1 0 1 0-1-1.732l-2.598 1.5A1 1 0 0 0 14.33 7.5Zm-8.66 5a1 1 0 0 0-1.366-.366l-2.598 1.5a1 1 0 1 0 1 1.732l2.598-1.5A1 1 0 0 0 5.67 12.5Z"
          />
        </svg>
      </div>
    </div>
  );
};
