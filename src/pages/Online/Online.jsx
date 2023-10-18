import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { LinkButton } from '../../components/LinkButton/LinkButton';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';

const cx = cn.bind(styles);

export const Online = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState(null);
  const [beginnerIndex, setBeginnerIndex] = useState(0);
  const [masterIndex, setMasterIndex] = useState(0);

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

        {!!data && (
          <>
            <FeedbackCarousel data={data.beginner} setIndex={setBeginnerIndex} />

            <LinkButton className={cx('link_secondary')} buttonUrl={data.beginner[beginnerIndex].url} theme="secondary">
              Записаться на курс
            </LinkButton>
          </>
        )}
      </section>

      <section className={cx('section')}>
        <h2 className={cx('section__title')}>
          Темы для более опытных занимающихся и для тех, кому интересно глубже изучать методы и технику Хуньюань Тайцзи
        </h2>
        {!!data && (
          <>
            <FeedbackCarousel data={data.master} setIndex={setMasterIndex} />

            <LinkButton className={cx('link_secondary')} buttonUrl={data.master[masterIndex].url} theme="secondary">
              Записаться на курс
            </LinkButton>
          </>
        )}
      </section>
    </div>
  );
};
