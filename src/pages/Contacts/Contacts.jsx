import { useEffect } from 'react';
import cn from 'classnames/bind';

import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Contacts = () => {
  const { setIsShopPage } = getStore;

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  return (
    <div className={cx('contacts-wrapper')}>
      <section className={cx('contacts')}>
        <h2 className={cx('title')}>Борисова Наташа</h2>
        <a className={cx('tel')} href="tel:+79652071339">
          +7 (965) 207-13-39
        </a>
        <a className={cx('link')} href="mailto:taiheclub@yandex.ru">
          taiheclub@yandex.ru
        </a>
        <a className={cx('link')} href="http://" target="_blank" rel="noopener noreferrer">
          курсы онлайн-школы
        </a>
        <p className={cx('text')}>
          В Санкт-Петербурге возможна запись на очные индивидуальные занятия. Для жителей других городов и стран
          индивидуальные занятия проводятся онлайн.
        </p>
      </section>

      <section>
        <h2 className={cx('title')}>Поддержать проекты и автора</h2>
        <p className={cx('text')}>Сбер: 2202 2035 1385 4861</p>
        <p className={cx('text')}>Благодарю!</p>
      </section>
    </div>
  );
};
