import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { getData } from '../../utils/getData';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Teachers = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ url: './data/teachers.json', callback: setData });
  }, [data.length]);

  return (
    <div>
      <div className={cx('teachers-block')}>
        {data.map((item) => (
          <InfoBlock
            name={item.name}
            imgUrl={item.imgUrl}
            text={item.text}
            isButton={true}
            key={item.name + item.url}
          />
        ))}
      </div>

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
            Наш основной информационный{' '}
            <a className={cx('resources-link')} href={URL.telegram} target="_blank" rel="noreferrer">
              Телеграм канал.
            </a>
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
            <a className={cx('resources-link')} href={URL.youtube} target="_blank" rel="noreferrer">
              YouTube Канал Борисовой Наташи.
            </a>

            <h3 className={cx('resources-item__title')}>Там публикуются:</h3>
            <ul className={cx('features-list')}>
              <li>- Записи отдельных упражнений, практик и методов</li>
              <li>- Интервью, лекции, теория тайцзицюань и ушу</li>
              <li>- Подборки видео мастеров Хуньюань</li>
              <li>- Прочее видео по ушу и цигун (Плейлист «Ушу, цигун»)</li>
            </ul>
          </li>

          <li className={cx('resources-item')}>
            <a className={cx('resources-link')} href={URL.zenclass} target="_blank" rel="noreferrer">
              Курсы нашей онлайн школы
            </a>
          </li>
        </ol>
      </footer>
    </div>
  );
};
