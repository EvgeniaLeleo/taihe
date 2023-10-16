import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const FeedbackBlock = ({ name, course, text }) => {
  return (
    <div className={cx('feedback-block')}>
      {!!name && <h2 className={cx('name')}>{name}</h2>}
      {!!course && <p className={cx('course')}>{course}</p>}
      {!!text && <p className={cx('text')}>{text}</p>}
    </div>
  );
};
