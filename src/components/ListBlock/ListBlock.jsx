import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const ListBlock = ({ description, links, list, title }) => {
  return (
    <div className={cx('list-block')}>
      {!!title && <h3 className={cx('title')}>{title}</h3>}
      {!!description && <p className={cx('description')}>{description}</p>}
      {!!list && (
        <ul className={cx('list')}>
          {list.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
