import cn from 'classnames/bind';

import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const ListBlock = ({ description, list, title, theme }) => {
  return (
    <div className={cx('list-block')}>
      {!!title && <h3 className={cx('title')}>{title}</h3>}
      {!!description && <p className={cx('description')}>{description}</p>}
      {!!list && (
        <ul className={cx('list')}>
          {list.map((item) => (
            <li key={item.name + item.link}>
              {theme === 'dash' && '- '}
              <LinkWrapper isInline={true} isUnderline={false} linkText={item.name} linkUrl={item.link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
