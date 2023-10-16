import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { getStore } from '../../utils/getStore';

import img from '../../images/about/about.jpg';
import styles from './styles.module.css';
import { useEffect } from 'react';

const cx = cn.bind(styles);

const About = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(false);
  }, []);

  return (
    <div className={cx('about')}>
      <img className={cx('about__image')} src={img} alt="" />
      <div className={cx('text-wrapper')}>
        <p className={cx('description')}>
          Мы объединяем всех, кому нравится быть здоровыми и счастливыми, кому интересно исследовать себя и окружающий
          мир. Нам и нашим друзьям важно жить в гармонии с Природой, с другими людьми, а главное - с самими собой. Среди
          нас тайцзишники и цигунисты, остеопаты, врачи, учителя, художники, музыканты и просто хорошие люди.
        </p>
      </div>
    </div>
  );
};

export default observer(About);
