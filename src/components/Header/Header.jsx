import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { LinkButton } from '../LinkButton/LinkButton';

import logo from '../../images/logo.svg';
import youtube from '../../images/icons/youtube-icon.svg';
import telegram from '../../images/icons/telegram-icon.svg';

import { ROUTES, URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Header = () => {
  return (
    <header className={cx('header')}>
      <LinkButton buttonUrl={URL.zenclass} theme="primary">
        Начать заниматься
      </LinkButton>

      <Link className={cx('logo-wrapper')} to={ROUTES.main}>
        <img src={logo} alt="Логотип" />
      </Link>

      <div className={cx('socials')}>
        <a className={cx('socials__link')} href={URL.youtube} target="_blank" rel="noreferrer">
          <img className={cx('socials__image')} src={youtube} alt="YouTube" />
        </a>
        <a className={cx('socials__link')} href={URL.telegram} target="_blank" rel="noreferrer">
          <img className={cx('socials__image')} src={telegram} alt="Telegram" />
        </a>
      </div>
    </header>
  );
};
