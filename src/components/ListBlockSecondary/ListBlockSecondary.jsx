import cn from 'classnames/bind';

import styles from './styles.module.css';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

const cx = cn.bind(styles);

export const ListBlockSecondary = ({ list, title }) => {
  return (
    <div className={cx('list-block')}>
      {!!title && <h3 className={cx('title')}>{title}</h3>}
      {!!list && (
        <ul className={cx('list')}>
          {list.map((item) => (
            <li className={cx('list-item')} key={item.name + item.link}>
              <LinkWrapper className={cx('list-link')} isUnderline={false} linkText={item.name} linkUrl={item.link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
