import { useEffect } from 'react';
import cn from 'classnames/bind';

import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { URL } from '../../constants';
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
        <LinkWrapper linkText="+7 (965) 207-13-39" linkUrl="tel:+79652071339" isUnderline={false} target="current" />
        <LinkWrapper className={cx('link')} linkText="taiheclub@yandex.ru" linkUrl={URL.mailto} target="current" />
        <LinkWrapper className={cx('link')} linkText="курсы онлайн-школы" linkUrl={URL.zenclass} />

        <p className={cx('text')}>
          В Санкт-Петербурге можно записаться на очные индивидуальные занятия. Для жителей других городов и&nbsp;стран
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
