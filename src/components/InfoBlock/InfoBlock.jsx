import cn from 'classnames/bind';

import { Button } from '../Button/Button';

import styles from './style.module.css';

const cx = cn.bind(styles);

export const InfoBlock = ({ imgUrl, name = '', text = '', isButton = false, linkUrl = '', linkText = '' }) => {
  return (
    <div>
      <div className={cx('image-wrapper')}>
        <img className={cx('image')} src={imgUrl} alt={name} />
      </div>
      {!!name && <h2 className={cx('name')}>{name}</h2>}
      {!!text && <p className={cx('text')}>{text}</p>}
      {isButton && (
        <Button theme="secondary" mt={26}>
          Записаться на занятие
        </Button>
      )}
      {!!linkUrl && !!linkText && (
        <a className={cx('link')} href="/" target="_blank" rel="noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};
