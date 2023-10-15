import cn from 'classnames/bind';

import styles from './style.module.css';

const cx = cn.bind(styles);

export const TeacherMiniBlock = ({ imgUrl, name = '', text = '' }) => {
  return (
    <div>
      <div className={cx('image-wrapper')}>
        <img className={cx('image')} src={imgUrl} alt={name} />
      </div>
      {!!name && <h2 className={cx('name')}>{name}</h2>}
      {!!text && <p className={cx('text')}>{text}</p>}
    </div>
  );
};
