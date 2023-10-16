import cn from 'classnames/bind';

import { Button } from '../Button/Button';
import youtube from '../../images/icons/youtube-icon-light.svg';
import telegram from '../../images/icons/telegram-icon-light.svg';

import { URL } from '../../constants';
import styles from './style.module.css';

const cx = cn.bind(styles);

export const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('button-wrapper')}>
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
