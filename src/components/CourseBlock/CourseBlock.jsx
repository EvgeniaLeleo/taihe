import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const CourseBlock = ({ description, name, text }) => {
  return (
    <div className={cx('feedback-block')}>
      {!!name && (
        <h2 className={cx('name')}>
          {name.split('\n').map((chunk) => (
            <p className={cx('text__paragraph')} key={chunk}>
              {chunk}
            </p>
          ))}
        </h2>
      )}
      {!!description && <p className={cx('description')}>{description}</p>}
      {!!text && <p className={cx('text')}>{text}</p>}
    </div>
  );
};
