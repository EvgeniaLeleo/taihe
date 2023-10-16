import cn from 'classnames/bind';

import styles from './styles.module.css';
import { getStore } from '../../utils/getStore';
import { useEffect } from 'react';

const cx = cn.bind(styles);

export const Library = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(false);
  }, []);

  return (
    <div className={cx('library')}>
      <section className={cx('library__section')}>
        <h2 className={cx('title')}>Материалы по Хуньюань Тайцзи</h2>
        <p className={cx('text')}>
          Первый раздел касается Хуньюань Тайцзи. Здесь вы найдете статьи по истории стиля, биографии мастеров, их
          интервью, различные заметки и ссылки на материалы по Хуньюань Тайцзи, словарь терминов, структуру и описание
          техник школы, шпаргалки по некоторым методам, списки с названиями форм и тд.
        </p>
      </section>

      <section className={cx('library__section')}>
        <h2 className={cx('title')}>Разные полезности</h2>
        <p className={cx('text')}>
          Второй раздел содержит дополнительную информацию, которая может пригодиться при изучении тайцзи:
        </p>
      </section>
    </div>
  );
};
