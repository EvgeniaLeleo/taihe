import cn from 'classnames/bind';

import { LinkButton } from '../LinkButton/LinkButton';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const getStringWithLink = ({ string, url }) => {
  const startIndex = string.indexOf('<<');
  const endIndex = string.indexOf('>>');

  if (startIndex === -1) {
    return string;
  }

  return (
    <span>
      {string.slice(0, startIndex)}
      <a className={cx('link_inline')} href={url} target="_blank" rel="noreferrer">
        {string.slice(startIndex + 2, endIndex)}
      </a>
      {string.slice(endIndex + 2)}
    </span>
  );
};

export const InfoBlock = ({ buttonText = '', imgUrl, linkText = '', linkUrl = '', name = '', text = '' }) => {
  return (
    <div className={cx('info-block')}>
      <div>
        <div className={cx('image-wrapper')}>
          <img className={cx('image')} src={imgUrl} alt={name} />
        </div>
        {!!name && <h2 className={cx('name')}>{name}</h2>}
        {!!text &&
          text.split('\n').map((chunk) => (
            <p className={cx('text')} key={chunk}>
              {getStringWithLink({ string: chunk, url: linkUrl })}
            </p>
          ))}
        {!!buttonText && (
          <LinkButton theme="secondary" className={cx('link_secondary')}>
            {buttonText}
          </LinkButton>
        )}
      </div>
      {!!linkUrl && !!linkText && (
        <a className={cx('link')} href={linkUrl} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};
