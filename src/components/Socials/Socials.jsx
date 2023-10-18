import cn from 'classnames/bind';

import { URL } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Socials = ({ telegramIcon, telegramIconHover, youtubeIcon, youtubeIconHover }) => {
  return (
    <div className={cx('socials')}>
      <a className={cx('socials__link')} href={URL.youtube} target="_blank" rel="noreferrer">
        <img className={cx('socials__image')} src={youtubeIcon} alt="YouTube" />
        <img className={cx('socials__image', 'socials__image_hover')} src={youtubeIconHover} alt="YouTube" />
      </a>
      <a className={cx('socials__link')} href={URL.telegram} target="_blank" rel="noreferrer">
        <img className={cx('socials__image')} src={telegramIcon} alt="Telegram" />
        <img className={cx('socials__image', 'socials__image_hover')} src={telegramIconHover} alt="Telegram" />
      </a>
    </div>
  );
};
