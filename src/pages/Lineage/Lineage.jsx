import { useEffect } from 'react';
import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { TeacherBlock } from '../../components/TeacherBlock/TeacherBlock';
import { TextBlock } from '../../components/TextBlock/TextBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import mainImg from '../../images/lineage/main.jpg';
import fenPortrait from '../../images/lineage/fen-portrait.jpg';
import natashaPortrait from '../../images/lineage/natasha-portrait.jpg';
import chenPortrait from '../../images/lineage/chen-portrait.jpg';
import fenBig from '../../images/lineage/fen-big.jpg';
import chenBig from '../../images/lineage/chen-big.jpg';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const FEN = {
  first: [
    'Фэн Чжицян воспитанник двух великих учителей. Легендарный грандмастер Чэнь Факэ, принадлежавший к 17-му поколению Тайцзицюань стиля Чэнь, высоко ценил Фэн Чжицяна и передал ему все, что знал. Грандмастер Ху Яочжэнь, известный специалист по Синьи Люхэ и Цигун, также передал Фэн Чжицяну истинную суть своего учения.',
    'Грандмастер Фэн придавал большое значение и традиции, и нововведениям. Он создал Хуньюань Тайцзи, чтобы выразить истинный принцип, лежащий в основе движения всех вещей. Система сочетает Тайцзи-Цигун и Синьи, обеспечивая развитие навыков как здоровья, так и самозащиты. Фундаментальный принцип Хуньюань Тайцзи состоит в том, что укрепляя здоровье и формируя навыки самозащиты, он сосредотачивается на здоровье; культивируя движение и покой, делает упор на покой; развивая одновременно внутреннее и внешнее, акцент делает на внутреннее. Внешнее и внутреннее действуют в соединении; верх и низ тела следуют друг другу; все тело движется скоординированно, состояние целостности Хуньюань культивируется постоянно.',
  ],
  second: [
    'Грандмастер Фэн мыслил Тайцзи широко и свободно. Он опубликовал несколько книг и поделился с широкой общественностью многими закрытыми до того методами. Тайцзи является сокровищем традиционной китайской культуры, однако мастер посетил многие страны, чтобы принести его в качестве дара. Теперь традиция процветает. Дома и за рубежом грандмастера почитают за высокие моральные качества и несравненные навыки в воинских искусствах.',
    'Фэн Чжицян ушел из жизни 5 мая 2012 года. Традицию Хуньюань Тайцзи продолжают его ученики по всему миру.',
  ],
};

const CHEN = {
  first: [
    'Родился в 1951 году. Живет и практикует в Пекине.В молодости много лет занимался Бацзи-цюаньс учителем Чжан Сючу. В зрелые годы познакомился с Фэн Чжицяном, стал практиковать тайцзицюань и обучался у грандмастера более 30 лет. На семинарах в разных странах Чэнь Сян сопровождал учителя Фэна, продолжая постигать все тонкости искусства тайцзицюань. Является одним из самых близких его учеников.',
  ],
  second: [
    'Преданность боевым искусствам и высокие моральные качества позволили Чэнь Сяну стать признанным мастером не только на родине, но и за рубежом (Испания, США, Россия и др). С 2013 года он помогает нам постигать тайцзицюань во всех аспектах - внутреннее мастерство нэйгун, техника и применение, парная работа, философия, медицина, медитация и пр. Обучение у такого человека - большая удача и возможность получить правильный метод из первых рук.',
  ],
};

export const Lineage = () => {
  const { setIsShopPage } = getStore;

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  return (
    <div className={cx('lineage')}>
      <div className={cx('image-wrapper')}>
        <img className={cx('lineage__image')} src={mainImg} alt="Фотографии учителей" />
      </div>
      <div className={cx('content-wrapper')}>
        <div className={cx('teachers-block')}>
          <InfoBlock
            imgUrl={fenPortrait}
            name="Грандмастер Фэн Чжицян"
            text="основатель направления Хуньюань Тайцзицюань"
          />
          <InfoBlock
            imgUrl={natashaPortrait}
            name="Борисова Наташа"
            text="ученица мастера Чэнь Сяна, представитель 3-его поколения Хуньюань Тайцзицюань"
          />
          <InfoBlock
            imgUrl={chenPortrait}
            name="Мастер Чэнь Сян"
            text="ученик грандмастера Фэна,  наследник традиции Хуньюань Тайцзицюань во 2-м поколении"
          />
        </div>

        <TeacherBlock
          imgUrl={fenBig}
          name="Грандмастер Фэн Чжицян (1928-2012)"
          description="Фэн Чжицян - замечательный мастер боевых искусств, обладатель 9-го дуаня ушу, наследник традиции тайцзицюань стиля Чэнь в 18-ом поколении, а также создатель системы Чэнь Ши Синьи Хуньюань Тайцзи."
        />
        <TextBlock contentFirst={FEN.first} contentSecond={FEN.second} />

        <TeacherBlock imgUrl={chenBig} name="Мастер Чэнь Сян" />
        <TextBlock contentFirst={CHEN.first} contentSecond={CHEN.second} />
      </div>
    </div>
  );
};
