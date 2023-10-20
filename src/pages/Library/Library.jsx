import { useEffect } from 'react';
import cn from 'classnames/bind';

import { ListBlock } from '../../components/ListBlock/ListBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const MATERIALS = {
  title: 'Материалы по Хуньюань Тайцзи',
  description: 'Первый раздел касается Хуньюань Тайцзи. Здесь вы найдете:',
  list: [
    { name: 'Биографии мастеров, интервью, тексты', link: 'https://disk.yandex.ru/d/DnebRrSNUCsLng' },
    { name: 'Шпаргалки по методам и практикам Хуньюань Тайцзи', link: 'https://disk.yandex.ru/d/jBBfrbz6AhgD2g' },
    { name: 'Статьи по теории, полезные материалы для занимающихся', link: 'https://disk.yandex.ru/d/MqS6DGTUlSE3ZA' },
  ],
};

const PDF = {
  title: '',
  description: '',
  list: [
    { name: 'Структура Хуньюань Тайцзи', link: './data/pdf/structure_of_hunuan_taichi.pdf' },
    { name: 'Легендарная история Фэн Чжицяна', link: './data/pdf/legenradnaya_istoriya_fen_chzhitsana.pdf' },
    {
      name: 'Ярек Шиманский. Интервью с Фэн Чжицяном',
      link: './data/pdf/yarek_shimansky_interview_s_fen_chzhitsanom.pdf',
    },
  ],
};

const USEFUL = {
  title: 'Разные полезности',
  description: 'Второй раздел содержит дополнительную информацию, которая может пригодиться при изучении тайцзи:',
  list: [
    { name: 'Книги по ушу и цигун', link: 'https://disk.yandex.ru/d/iB3XTE9Z9h7wiQ' },
    { name: 'Книги и статьи по другим дисциплинам', link: 'https://disk.yandex.ru/d/WQxd1b7jYSbPWQ' },
    { name: 'Материалы по традиционной китайской медицине (ТКМ)', link: 'https://disk.yandex.ru/d/TsiFyIZ8qgTgYg' },
    { name: 'Материалы по чайной культуре', link: 'https://disk.yandex.ru/d/aHUinVYm4chY4w' },
    { name: 'Художественная литература для вдохновения', link: 'https://disk.yandex.ru/d/ejozlhOyqblcoQ' },
  ],
};

const BROTHERS = {
  title: 'Собратья по Хуньюань Тайцзи',
  description: '',
  list: [
    { name: 'Китай', description: '(Академия Фэн Чжицяна)', link: 'http://www.hunyuantaiji.com.cn/en/Default.aspx' },
    { name: 'Китай', description: '(Чжан Цзипин)', link: 'http://www.01248.cn/English/index.asp' },
    { name: 'Сент-Луис, США', description: '(Джастин Михан)', link: 'http://stltaiji.com/Resources/Videos.aspx' },
    { name: 'Сент-Луис, США', description: '(Херб Парран)', link: 'https://traditionaltaiji.com/' },
    { name: 'Сан-Франциско, США', description: '(Майкл Дорган)', link: 'http://www.taichisanjose.com/' },
    {
      name: 'Сан Франциско, США',
      description: '(Малькольм Дин и Браэн Гуань)',
      link: 'https://www.silkreeler.com/home',
    },
    { name: 'Эдисон, Нью-Джерси, США', description: '(Ван Фэнмин)', link: 'http://worldtaiji.com/' },
    { name: 'Испания', description: '(Педро Валенсиа)', link: 'https://www.hunyuantaichi.com/' },
    { name: 'Москва, Россия', description: '(Алина Харламова и Вадим Черноусов)', link: 'https://t.me/madargita' },
    { name: 'Пермь, Россия', description: '(Дмитрий Шапарь и Мария Павлова)', link: 'https://vk.com/hunyuantaichi' },
  ],
};

const FRIENDS = {
  title: 'Друзья и коллеги',
  description: '',
  list: [
    { name: 'Центр ушу и цигун «У Дэ»', description: '(Тольятти, Артем Марченко)', link: 'https://vk.com/wushu_tlt' },
    {
      name: 'Остеопатический центр «Дыхание Жизни»',
      description: '(Санкт-Петербург)',
      link: 'https://www.osteocenter-spb.ru/',
    },
    {
      name: 'Проект «Свобода Ума»',
      description: '(Игорь Берхин, практики внимательности)',
      link: 'http://svobodauma.org/',
    },
    {
      name: 'Майндфулнес - медитация осознанности',
      description: '(Вадим Матюшин)',
      link: 'http://realmindfulness.ru/',
    },
    {
      name: 'ЯСНЫЙ УМ',
      description: '(youtube-канал про науку, культуру и практику осознанности)',
      link: 'http://www.youtube.com/channel/UC06tU3eXm4ZGPp55ahob-ug',
    },
    { name: 'Ретритный центр «Северный Кунсангар»', description: '(Москва)', link: 'http://kunsangar.ru/' },
    { name: 'Блог о Традиционной Китайской Медицине', description: '', link: 'https://kitamed.ru/' },
    {
      name: 'Блог Егора Лобусова',
      description: '(переводы с китайского, багуа, цигун, медицина)',
      link: 'http://moonreflection.ru/',
    },
  ],
};

export const Library = () => {
  const { setIsShopPage } = getStore;

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  return (
    <div className={cx('library')}>
      <ListBlock
        className={cx('library-section')}
        title={MATERIALS.title}
        description={MATERIALS.description}
        list={MATERIALS.list}
        theme="dash"
      />
      <ListBlock className={cx('library-section', 'library-section_no-margin')} list={PDF.list} />
      <ListBlock
        className={cx('library-section')}
        title={USEFUL.title}
        description={USEFUL.description}
        list={USEFUL.list}
      />
      <ListBlock
        className={cx('library-section')}
        title={BROTHERS.title}
        description={BROTHERS.description}
        list={BROTHERS.list}
      />
      <ListBlock
        className={cx('library-section')}
        title={FRIENDS.title}
        description={FRIENDS.description}
        list={FRIENDS.list}
      />
    </div>
  );
};
