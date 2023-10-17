import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { CourseBlock } from '../../components/CourseBlock/CourseBlock';
import { LinkButton } from '../../components/LinkButton/LinkButton';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Online = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState(null);

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/courses.json', callback: setData });
  }, []);

  return (
    <div className={cx('online-wrapper')}>
      <section className={cx('section')}>
        <h2 className={cx('section__title')}>Темы для начального уровня или для знакомства с цигун и тайцзицюань</h2>
        {!!data &&
          data.beginner.map((item) => (
            <CourseBlock name={item.name} description={item.description} text={item.text} key={item.name + item.text} />
          ))}
        <LinkButton className={cx('link_secondary')} theme="secondary">
          Записаться на курс
        </LinkButton>
      </section>

      <section className={cx('section')}>
        <h2 className={cx('section__title')}>
          Темы для более опытных занимающихся и для тех, кому интересно глубже изучать методы и технику Хуньюань Тайцзи
        </h2>
        {!!data &&
          data.master.map((item) => (
            <CourseBlock name={item.name} description={item.description} text={item.text} key={item.name + item.text} />
          ))}
        <LinkButton className={cx('link_secondary')} theme="secondary">
          Записаться на курс
        </LinkButton>
      </section>
    </div>
  );
};
