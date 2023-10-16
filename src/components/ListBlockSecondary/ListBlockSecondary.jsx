import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const ListBlockSecondary = ({ list, title }) => {
  return (
    <div className={cx('list-block')}>
      {!!title && <h3 className={cx('title')}>{title}</h3>}
      {!!list && (
        <ul className={cx('list')}>
          {list.map((item) => (
            <li className={cx('list-item')} key={item.name + item.link}>
              <a className={cx('list-link')} href={item.link} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
