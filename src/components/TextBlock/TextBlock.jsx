import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const TextBlock = ({ contentFirst, contentSecond, isBorder = false, title }) => {
  return (
    <div className={cx({ isBorder: isBorder })}>
      {!!title && <h2 className={cx('title')}>{title}</h2>}
      <div className={cx('text-content')}>
        <div className={cx('text-content_first')}>
          {contentFirst.map((textBlock) => (
            <p className={cx('text-content_paragraph')}>{textBlock}</p>
          ))}
        </div>
        <div className={cx('text-content_second')}>
          {contentSecond.map((textBlock) => (
            <p className={cx('text-content_paragraph')}>{textBlock}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
