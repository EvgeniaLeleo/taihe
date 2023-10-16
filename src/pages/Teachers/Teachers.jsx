import cn from 'classnames/bind';

import { TeacherMiniBlock } from '../../components/TeacherMiniBlock/TeacherMiniBlock';

import borisova from '../../images/teachers/borisova.jpg';
import chernousov from '../../images/teachers/chernousov.jpg';
import itskovitch from '../../images/teachers/itskovitch.jpg';
import chistakov from '../../images/teachers/chistakov.jpg';

import { URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Teachers = () => {
  return (
    <div>
      <div className={cx('teachers-block')}>
        <TeacherMiniBlock
          imgUrl={borisova}
          name="Борисова Наташа"
          text="С детства влюблена в мир восточных единоборств. Занимаюсь ушу с 1996 года, цигун и тайцзицюань с 2002. Училась в Академии Фэн Чжицяна (Пекин), а в 2016 стала прямым учеником мастера Чэнь Сяна и официальным представителем третьего поколения Хуньюань Тайцзи в России. В настоящее время веду индивидуальные занятия в Санкт-Петербурге и развиваю онлайн школу, чтобы как можно больше людей познакомились с теорией и практикой Тайцзи и Цигун. Подробную биографию можно почитать здесь."
          isButton={true}
        />
        <TeacherMiniBlock
          imgUrl={chernousov}
          name="Черноусов вадим"
          text="Опытный практик и тренер тайцзицюань. Стаж преподавания с 1989 года. Ведет регулярные занятия в Череповце, проводит семинары в Москве. Специализация - традиционные техники тайцзицюань и цигун. Дополнительная специализация- восстановительные практики для людей с проблемамиопорно-двигательного аппарата, позвоночника, нарушениями органов дыхания. Аттестован Пекинской Академией Тайцзицюань им. Фэн Чжицяна. Продолжает обучение у китайских мастеров."
          isButton={true}
        />
        <TeacherMiniBlock
          imgUrl={itskovitch}
          name="Ицкович Ксения"
          text='С 12 лет я изучаю китайский язык и занимаюсь ушу. Три года прожила в Китае, там же закончила Университет.С 2010 года занимаюсь цигун, тайцзицюань стиля "Чэнь Ши Синьи Хуньюань Тайцзи". Обучаю методам Нэйгун (для здоровья), традиционной технике Тайцзи, Синьи и Багуа, формамс оружием (меч, копьё). Сейчас работаю как устный переводчик и преподаватель китайского языка, выезжаю в командировки в Китай и обожаю утешествовать.'
          isButton={true}
        />
        <TeacherMiniBlock
          imgUrl={chistakov}
          name="Чистяков Сергей"
          text='С детства занимаюсь карате, рукопашным боем, таеквон-до(ITF федерация), дзюдзюцо, боксом. С 2012 года практикую тайцзицюань стиля "Чэнь Ши Синьи Хуньюань Тайцзи". В жизни стремлюсь быть расслабленным и умиротворённым, а так же внедрять практику расслабления в современную жизнь: работу программистом и свои активные увлечения.'
          isButton={true}
        />
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
