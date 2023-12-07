import cn from 'classnames/bind';

import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

import styles from './styles.module.css';

const cx = cn.bind(styles);

/**
 * theme === 'dash' добавляет черточку перед пунктом списка
 * @param {*} param0
 * @returns
 */
export const ListBlock = ({ className, description, list, title, theme }) => {
  return (
    <div className={cx('list-block', className)}>
      {!!title && <h3 className={cx('title')}>{title}</h3>}
      {!!description && <p className={cx('description')}>{description}</p>}
      {!!list && (
        <ul className={cx('list')}>
          {list.map((item) => (
            <li className={cx('list-item')} key={item.name + item.link}>
              {theme === 'dash' && '- '}
              <LinkWrapper isInline={true} isUnderline={true} linkText={item.name} linkUrl={item.link} />{' '}
              {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
