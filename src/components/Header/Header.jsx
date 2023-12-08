import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { LinkButton } from '../LinkButton/LinkButton';
import { Socials } from '../Socials/Socials';

import logo from '../../images/logo.svg';
import youtube from '../../images/icons/youtube-icon.svg';
import telegram from '../../images/icons/telegram-icon.svg';
import youtubeHover from '../../images/icons/youtube-icon-hover.svg';
import telegramHover from '../../images/icons/telegram-icon-hover.svg';

import { BUTTON_TYPE, ROUTES, URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Header = () => {
  const handleShowMenu = () => {};

  return (
    <header className={cx('header')}>
      <LinkButton className={cx('button-learn')} buttonUrl={URL.zenclass} theme="primary">
        Начать заниматься
      </LinkButton>

      <LinkButton className={cx('button-menu')} onClick={handleShowMenu} type={BUTTON_TYPE.button} theme="primary">
        Меню
      </LinkButton>

      <Link className={cx('logo-wrapper')} to={ROUTES.main}>
        <img className={cx('logo')} src={logo} alt="Логотип" />
      </Link>

      <Socials
        telegramIcon={telegram}
        telegramIconHover={telegramHover}
        youtubeIcon={youtube}
        youtubeIconHover={youtubeHover}
      />
    </header>
  );
};
