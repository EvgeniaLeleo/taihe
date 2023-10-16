import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const TeacherBlock = ({ imgUrl, name = '', description = '', text = '' }) => {
  return (
    <div className={cx('teacher-block')}>
      <div className={cx('image-wrapper')}>
        <img className={cx('image')} src={imgUrl} alt={name} />
      </div>
      {!!name && <h2 className={cx('name')}>{name}</h2>}
      {!!description && <p className={cx('description')}>{description}</p>}
      {!!text && <p className={cx('text')}>{text}</p>}
    </div>
  );
};
