import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';

import { URL } from '../../constants';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';

const cx = cn.bind(styles);

export const Teachers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ url: './data/teachers.json', callback: setData });
  }, []);

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
            <p className={cx('resources-item__paragraph')}>
              Там публикуются: Методы и принципы Хуньюань Тайцзицюань, теория и практика Цигун, заметки о здоровье,
              движении и дыхании, записи общих занятий, анонсы курсов, свежие новости. Доступен чат.
            </p>
          </li>
          <li className={cx('resources-item')}>
            <a className={cx('resources-link')} href={URL.youtube} target="_blank" rel="noreferrer">
              YouTube Канал Борисовой Наташи.
            </a>
            <h3 className={cx('resources-item__title')}>Там публикуются:</h3>
            <ul>
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
