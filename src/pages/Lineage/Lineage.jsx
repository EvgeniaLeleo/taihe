import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { TeacherBlock } from '../../components/TeacherBlock/TeacherBlock';
import { getStore } from '../../utils/getStore';

import mainImg from '../../images/lineage/main.jpg';
import fenPortrait from '../../images/lineage/fen-portrait.jpg';
import natashaPortrait from '../../images/lineage/natasha-portrait.jpg';
import chenPortrait from '../../images/lineage/chen-portrait.jpg';
import fenBig from '../../images/lineage/fen-big.jpg';
import chenBig from '../../images/lineage/chen-big.jpg';

import styles from './styles.module.css';
import { useEffect } from 'react';

const cx = cn.bind(styles);

export const Lineage = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(false);
  }, []);

  return (
    <div className={cx('lineage')}>
      <img className={cx('lineage__image')} src={mainImg} alt="" />
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

        <TeacherBlock imgUrl={chenBig} name="Мастер Чэнь Сян" />
      </div>
    </div>
  );
};
