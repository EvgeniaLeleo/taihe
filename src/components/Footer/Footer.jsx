import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';

import { getStore } from '../../utils/getStore';

import { Button } from '../Button/Button';
import youtube from '../../images/icons/youtube-icon-light.svg';
import telegram from '../../images/icons/telegram-icon-light.svg';

import { URL } from '../../constants';
import styles from './style.module.css';
// import { useEffect, useState } from 'react';

const cx = cn.bind(styles);

const Footer = () => {
  const { isShopPage } = getStore;

  // const isShop = window.location.pathname.includes('shop');

  // const [isShopPage, setIsShopPage] = useState(isShop);

  // console.log(window.location.pathname);

  // useEffect(() => {
  //   setIsShopPage(isShop);
  //   console.log(window.location.pathname);
  // }, [window.location.pathname]);

  return (
    <footer className={cx('footer')}>
      {isShopPage && (
        <div className={cx('footer_shop')}>
          <p className={cx('footer_shop__text')}>
            Заказы на чай, футболки и тайцзибан принимаются через почту taiheclub@yandex.ru и личные сообщения
            +79652071339 (WhatsApp/Telegram). Книги доступны в розничных магазинах и под заказ.
          </p>
        </div>
      )}
      <div className={cx('button-wrapper', { isShopPage: isShopPage })}>
        <Button theme="secondary" size="m">
          Записаться на занятия
        </Button>
      </div>
      <div className={cx('footer-bottom')}>
        <div className={cx('contacts-wrapper')}>
          <a className={cx('contacts-link')} href="mailto:taiheclub@yandex.ru">
            taiheclub@yandex.ru
          </a>
          <a className={cx('contacts-link')} href="tel:+79652071339">
            +7 (965) 207-13-39
          </a>
        </div>
        <div className={cx('socials')}>
          <a className={cx('socials__link')} href={URL.youtube} target="_blank" rel="noreferrer">
            <img className={cx('socials__image')} src={youtube} alt="YouTube" />
          </a>
          <a className={cx('socials__link')} href={URL.telegram} target="_blank" rel="noreferrer">
            <img className={cx('socials__image')} src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default observer(Footer);
