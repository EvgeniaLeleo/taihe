import { useEffect } from 'react';
import cn from 'classnames/bind';

import { ListBlock } from '../../components/ListBlock/ListBlock';
import { ListBlockSecondary } from '../../components/ListBlockSecondary/ListBlockSecondary';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const MATERIALS = {
  title: 'Материалы по Хуньюань Тайцзи',
  description: 'Первый раздел касается Хуньюань Тайцзи. Здесь вы найдете:',
  list: [
    'Статьи по истории стиля',
    'Биографии мастеров, их интервью',
    'Различные заметки и ссылки на материалы по Хуньюань Тайцзи',
    'Словарь терминов',
    'Структуру и описание техник школы',
    'Шпаргалки по некоторым методам',
    'Списки с названиями форм и тд.',
  ],
  links: ['', '', '', ''],
};

const USEFUL = {
  title: 'Разные полезности',
  description: 'Второй раздел содержит дополнительную информацию, которая может пригодиться при изучении тайцзи:',
  list: [
    'Книги по ушу и цигун',
    'Материалы по традиционной китайской медицине (ТКМ)',
    'Книги и статьи по другим дисциплинам',
    'Художественная литература для вдохновения',
    'Материалы по чайной культуре',
  ],
  links: ['', '', '', ''],
};

const BROTHERS = {
  title: 'Собратья по Хуньюань Тайцзи',
  description: '',
  list: [
    { name: 'Китай (Академия Фэн Чжицяна)', link: 'http://www.hunyuantaiji.com.cn/en/Default.aspx' },
    { name: 'Китай (Чжан Цзипин)', link: 'http://www.01248.cn/English/index.asp' },
    { name: 'Сент-Луис, США (Джастин Михан)', link: 'http://stltaiji.com/Resources/Videos.aspx' },
    { name: 'Сент-Луис, США (Херб Парран)', link: 'https://traditionaltaiji.com/' },
    { name: 'Сан-Франциско, США (Майкл Дорган)', link: 'http://www.taichisanjose.com/' },
    { name: 'Сан Франциско, США (Малькольм Дин и Браэн Гуань)', link: 'https://www.silkreeler.com/home' },
    { name: 'Эдисон, Нью-Джерси, США (Ван Фэнмин)', link: 'http://worldtaiji.com/' },
    { name: 'Испания (Педро Валенсиа)', link: 'https://www.hunyuantaichi.com/' },
    { name: 'Москва, Россия (Алина Харламова и Вадим Черноусов)', link: 'https://t.me/madargita' },
    { name: 'Пермь, Россия (Дмитрий Шапарь и Мария Павлова)', link: 'https://vk.com/hunyuantaichi' },
  ],
};

const FRIENDS = {
  title: 'Друзья и коллеги',
  description: '',
  list: [
    { name: 'Центр ушу и цигун «У Дэ» (Тольятти, Артем Марченко)', link: 'https://vk.com/wushu_tlt' },
    { name: 'Остеопатический центр «Дыхание Жизни» (Санкт-Петербург)', link: 'https://www.osteocenter-spb.ru/' },
    { name: 'Проект «Свобода Ума» (Игорь Берхин, практики внимательности)', link: 'http://svobodauma.org/' },
    { name: 'Майндфулнес - медитация осознанности (Вадим Матюшин)', link: 'http://realmindfulness.ru/' },
    {
      name: 'ЯСНЫЙ УМ (youtube-канал про науку, культуру и практику осознанности)',
      link: 'http://www.youtube.com/channel/UC06tU3eXm4ZGPp55ahob-ug',
    },
    { name: 'Ретритный центр «Северный Кунсангар» (Москва)', link: 'http://kunsangar.ru/' },
    { name: 'Блог о Традиционной Китайской Медицине', link: 'https://kitamed.ru/' },
    { name: 'Блог Егора Лобусова (переводы с китайского, багуа, цигун, медицина)', link: 'http://moonreflection.ru/' },
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
      <ListBlock title={MATERIALS.title} description={MATERIALS.description} list={MATERIALS.list} />
      <ListBlock title={USEFUL.title} description={USEFUL.description} list={USEFUL.list} />
      <ListBlockSecondary title={BROTHERS.title} description={BROTHERS.description} list={BROTHERS.list} />
      <ListBlockSecondary title={FRIENDS.title} description={FRIENDS.description} list={FRIENDS.list} />
    </div>
  );
};
