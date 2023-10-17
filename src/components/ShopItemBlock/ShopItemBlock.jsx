import cn from 'classnames/bind';

import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { LinkButton } from '../LinkButton/LinkButton';

const cx = cn.bind(styles);

export const ShopItemBlock = ({
  additionalText = '',
  amount = '',
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
        {!!amount && (
          <div className={cx('amount')}>
            {amount.split('\n').map((chunk) => (
              <p className={cx('text__paragraph')} key={chunk}>
                {chunk}
              </p>
            ))}
          </div>
        )}
        {linkUrl === 'inner' && !!linkText && (
          <NavLink className={cx('link')} to={ROUTES.teaShop}>
            {linkText}
          </NavLink>
        )}
        {!!linkUrl && linkUrl !== 'inner' && !!linkText && (
          <a className={cx('link')} href={linkUrl} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        )}
        {!!additionalText && <p className={cx('additional-text')}>{additionalText}</p>}
        {!!price && <p className={cx('price')}>Цена {price}</p>}
        {!!buttonText && !!buttonUrl && (
          <LinkButton className={cx('link_secondary')} theme="secondary" size="m" buttonUrl={buttonUrl}>
            {buttonText}
          </LinkButton>
        )}
      </div>
    </div>
  );
};
