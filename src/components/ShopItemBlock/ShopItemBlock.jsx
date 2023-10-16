import cn from 'classnames/bind';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const ShopItemBlock = ({
  additionalText = '',
  buttonUrl = '',
  buttonText = '',
  className = '',
  imgUrl,
  linkText = '',
  linkUrl = '',
  name = '',
  price = '',
  text = '',
}) => {
  return (
    <div className={cx(className, 'item')}>
      <div className={cx('image-wrapper')}>
        <img className={cx('image')} src={imgUrl} alt={name} />
      </div>

      <div>
        {!!name && <h2 className={cx('name')}>{name}</h2>}
        {!!text && (
          <div className={cx('text')}>
            {text.split('\n').map((chunk) => (
              <p className={cx('text__paragraph')} key={chunk}>
                {chunk}
              </p>
            ))}
          </div>
        )}
        {!!linkUrl && !!linkText && (
          <a className={cx('link')} href="/" target="_blank" rel="noreferrer">
            {linkText}
          </a>
        )}
        {!!additionalText && <p className={cx('additional-text')}>{additionalText}</p>}
        {!!price && <p className={cx('price')}>Цена {price}</p>}
        {!!buttonText && !!buttonUrl && (
          <a className={cx('link_secondary')} href={buttonUrl} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};
