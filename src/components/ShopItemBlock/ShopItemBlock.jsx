import cn from 'classnames/bind';

import { LinkButton } from '../LinkButton/LinkButton';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

import { ROUTES } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const ShopItemBlock = ({
  additionalText = '',
  amount = '',
  buttonUrl = '',
  buttonText = '',
  className = '',
  imgUrl,
  inStock,
  linkText = '',
  linkUrl = '',
  name = '',
  price = '',
  text = '',
}) => {
  return (
    <div className={cx(className, 'item')}>
      <div className={cx('image')} style={{ backgroundImage: `url(${imgUrl})` }}></div>

      <div>
        {!!name && (
          <h2 className={cx('name', { unavailable: !inStock })}>
            {name.split('\n').map((chunk) => (
              <p className={cx('text__paragraph')} key={chunk}>
                {chunk}
              </p>
            ))}
          </h2>
        )}
        {!!text && (
          <div className={cx('text', { unavailable: !inStock })}>
            {text.split('\n').map((chunk) => (
              <p className={cx('text__paragraph')} key={chunk}>
                {chunk}
              </p>
            ))}
          </div>
        )}
        {!!amount && (
          <div className={cx('amount', { unavailable: !inStock })}>
            {amount.split('\n').map((chunk) => (
              <p className={cx('text__paragraph')} key={chunk}>
                {chunk}
              </p>
            ))}
          </div>
        )}
        {inStock && linkUrl === 'inner' && !!linkText && (
          <LinkWrapper className={cx('link')} linkText={linkText} linkUrl={ROUTES.teaShop} type="nav" />
        )}
        {inStock && !!linkUrl && linkUrl !== 'inner' && !!linkText && (
          <LinkWrapper
            className={cx('link')}
            isUnderline={true}
            linkText={linkText}
            linkUrl={linkUrl}
            disabled={!inStock}
          />
        )}
        {!!additionalText && <p className={cx('additional-text', { unavailable: !inStock })}>{additionalText}</p>}
        {inStock && !!price && <p className={cx('price', { unavailable: !inStock })}>Цена {price}</p>}
        {inStock && !!buttonText && !!buttonUrl && (
          <LinkButton
            className={cx('link_secondary', 'link_full-width')}
            theme="secondary"
            size="m"
            buttonUrl={buttonUrl}
            disabled={!inStock}
          >
            {buttonText}
          </LinkButton>
        )}
        {!inStock && <p className={cx('not_available')}>Нет в&nbsp;наличии</p>}
      </div>
    </div>
  );
};
