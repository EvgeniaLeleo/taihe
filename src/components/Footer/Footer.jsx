import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';

import { LinkButton } from '../LinkButton/LinkButton';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';
import { getStore } from '../../utils/getStore';

import youtube from '../../images/icons/youtube-icon-light.svg';
import telegram from '../../images/icons/telegram-icon-light.svg';
import youtubeHover from '../../images/icons/youtube-icon-hover-light.svg';
import telegramHover from '../../images/icons/telegram-icon-hover-light.svg';

import { URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const Footer = () => {
  const { isShopPage } = getStore;

  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-top')}>
        {isShopPage && (
          <div className={cx('footer_shop')}>
            <p className={cx('footer_shop__text')}>
              Заказы на чай, футболки и тайцзибан принимаются через почту{' '}
              <LinkWrapper
                className={cx('button-read-more')}
                isUnderline={false}
                linkText="taiheclub@yandex.ru"
                linkUrl="mailto:taiheclub@yandex.ru"
              />{' '}
              и личные сообщения <LinkWrapper isUnderline={false} linkText="+79652071339" linkUrl="tel:+79652071339" />{' '}
              (WhatsApp/Telegram). Книги доступны в розничных магазинах и под заказ.
            </p>
          </div>
        )}
        <div className={cx('button-wrapper', { isShopPage: isShopPage })}>
          <LinkButton buttonUrl={URL.zenclass} theme="secondary" size="l">
            Начать заниматься
          </LinkButton>
        </div>
      </div>
      <div className={cx('footer-bottom')}>
        <div className={cx('footer-bottom__content')}>
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
              <img className={cx('socials__image', 'socials__image_hover')} src={youtubeHover} alt="YouTube" />
            </a>
            <a className={cx('socials__link')} href={URL.telegram} target="_blank" rel="noreferrer">
              <img className={cx('socials__image')} src={telegram} alt="Telegram" />
              <img className={cx('socials__image', 'socials__image_hover')} src={telegramHover} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default observer(Footer);
