import cn from 'classnames/bind';

import { TextBlock } from '../TextBlock/TextBlock';
import { useResize } from '../../hooks/useResize';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const TeacherBlock = ({ imgUrl, name = '', description = '', teacher }) => {
  return (
    <div className={cx('teacher-block')}>
      <div className={cx('image')} style={{ backgroundImage: `url(${imgUrl})` }}></div>

      <div className={cx('text-block')}>
        {!!name && <h2 className={cx('name')}>{name}</h2>}
        {!!description && <p className={cx('description')}>{description}</p>}

        <TextBlock contentFirst={teacher.first} contentSecond={teacher.second} />
      </div>
    </div>
  );
};
