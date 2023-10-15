import { Link } from 'react-router-dom'
import cn from 'classnames/bind'

import { Button } from '../Button/Button'
import logo from '../../images/logo.svg'
import youtube from '../../images/icons/youtube-icon.svg'
import telegram from '../../images/icons/telegram-icon.svg'

import styles from './style.module.css'

const cx = cn.bind(styles)

export const Header = () => {
  return (
    <header className={cx('header')}>
      <Button theme="primary">Начать заниматься</Button>
      <Link to="/">
        <img src={logo} alt="Логотип" />
      </Link>
      <div className={cx('socials')}>
        <a
          className={cx('socials__link')}
          href="https://www.youtube.com/channel/UCJNov9v4MSklmtsLDCkfQow"
          target="_blank"
          rel="noreferrer"
        >
          <img className={cx('socials__image')} src={youtube} alt="YouTube" />
        </a>
        <a
          className={cx('socials__link')}
          href="https://t.me/taiheclub"
          target="_blank"
          rel="noreferrer"
        >
          <img className={cx('socials__image')} src={telegram} alt="Telegram" />
        </a>
      </div>
    </header>
  )
}
