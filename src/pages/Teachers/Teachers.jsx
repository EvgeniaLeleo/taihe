import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Teachers = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/teachers.json', callback: setData });
  }, [data.length]);

  return (
    <div className={cx('teachers-page')}>
      {!!data && !!data.length && (
        <div className={cx('teachers-block')}>
          {data.map((item) => (
            <InfoBlock
              buttonText="Записаться на занятие"
              buttonUrl={item.buttonUrl}
              imgUrl={item.imgUrl}
              linkText={item.linkText}
              linkUrl={item.linkUrl}
              name={item.name}
              text={item.text}
              key={item.name + item.url}
            />
          ))}
        </div>
      )}

      <footer className={cx('info')}>
        <h2 className={cx('header')}>Формат занятий Клуба «Тай Хэ»</h2>
        <ol className={cx('format-list')}>
          <li>Общие групповые (очно и онлайн)</li>
          <li>Персональные занятия, составление индивидуальных программ (очно и онлайн)</li>
          <li>Выездные семинары 2-9 дней</li>
        </ol>

        <h2 className={cx('header', 'resources')}>Доступные ресурсы</h2>
        <ol className={cx('resources-list')}>
          <li className={cx('resources-item')}>
            Наш основной информационный <LinkWrapper inline={true} linkText="Телеграм канал" linkUrl={URL.telegram} />
            <h3 className={cx('resources-item__title')}>Там публикуются:</h3>
            <ul className={cx('features-list')}>
              <li>- Методы и принципы Хуньюань Тайцзицюань</li>
              <li>- Теория и практика Цигун</li>
              <li>- Заметки о здоровье, движении и дыхании</li>
              <li>- Записи общих занятий, анонсы курсов, свежие новости</li>
              <li>- Доступен чат</li>
            </ul>
          </li>

          <li className={cx('resources-item')}>
            <LinkWrapper linkText="YouTube Канал Борисовой Наташи" linkUrl={URL.youtube} />
            <h3 className={cx('resources-item__title')}>Там публикуются:</h3>
            <ul className={cx('features-list')}>
              <li>- Записи отдельных упражнений, практик и методов</li>
              <li>- Интервью, лекции, теория тайцзицюань и ушу</li>
              <li>- Подборки видео мастеров Хуньюань</li>
              <li>- Прочее видео по ушу и цигун (Плейлист «Ушу, цигун»)</li>
            </ul>
          </li>

          <li className={cx('resources-item')}>
            <LinkWrapper linkText="Курсы нашей онлайн школы" linkUrl={URL.zenclass} />
          </li>
        </ol>
      </footer>
    </div>
  );
};
