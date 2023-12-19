import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { LinkButton } from '../LinkButton/LinkButton';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';
import { Socials } from '../Socials/Socials';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import youtube from '../../images/icons/youtube-icon-light.svg';
import telegram from '../../images/icons/telegram-icon-light.svg';
import youtubeHover from '../../images/icons/youtube-icon-hover-light.svg';
import telegramHover from '../../images/icons/telegram-icon-hover-light.svg';
import arrowUp from '../../images/icons/arrow-up.svg';

import { URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const Footer = () => {
  const { isCoursesPage, isShopPage } = getStore;

  const [isArrowUpVisible, setIsArrowUpVisible] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      window.scrollY > 650 ? setIsArrowUpVisible(true) : setIsArrowUpVisible(false);
    };
  }, []);

  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-top')}>
        {isShopPage && (
          <div className={cx('footer_shop')}>
            <div className={cx('footer_shop__text')}>
              Заказы на чай, футболки и&nbsp;тайцзибан принимаются через почту{' '}
              <LinkWrapper
                className={cx('button-read-more')}
                isInline={true}
                isUnderline={false}
                linkText="taiheclub@yandex.ru"
                linkUrl={URL.mailto}
                target="current"
              />{' '}
              и&nbsp;личные сообщения{' '}
              <LinkWrapper
                isInline={true}
                isUnderline={false}
                linkText="+79652071339"
                linkUrl="tel:+79652071339"
                target="current"
              />{' '}
              (WhatsApp/Telegram). Книги доступны в&nbsp;розничных магазинах и&nbsp;под&nbsp;заказ.
            </div>
          </div>
        )}

        {!isCoursesPage && (
          <div className={cx('button-wrapper', { isShopPage: isShopPage })}>
            <LinkButton buttonUrl={URL.zenclass} theme="secondary" size="l">
              Начать заниматься
            </LinkButton>
          </div>
        )}

        {isCoursesPage && <div className={cx('space-wrapper')}></div>}
      </div>

      {/* Dark footer block */}
      <div className={cx('footer-bottom')}>
        <div className={cx('footer-bottom__content')}>
          {isArrowUpVisible && (
            <button className={cx('button-up')} onClick={scrollToTop}>
              <img className={cx('button-up__icon')} src={arrowUp} alt="Наверх" />
            </button>
          )}

          <div className={cx('contacts-wrapper')}>
            <a className={cx('contacts-link')} href={URL.mailto}>
              taiheclub@yandex.ru
            </a>
            <a className={cx('contacts-link')} href="tel:+79652071339">
              +7 (965) 207-13-39
            </a>
          </div>
          <Socials
            telegramIcon={telegram}
            telegramIconHover={telegramHover}
            youtubeIcon={youtube}
            youtubeIconHover={youtubeHover}
          />
        </div>
      </div>
    </footer>
  );
};

export default observer(Footer);
