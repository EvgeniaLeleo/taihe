import cn from 'classnames/bind';

import { LinkButton } from '../LinkButton/LinkButton';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

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
      <LinkWrapper
        className={cx('link_inline')}
        isUnderline={true}
        linkText={string.slice(startIndex + 2, endIndex)}
        linkUrl={url}
      />
      {string.slice(endIndex + 2)}
    </span>
  );
};

export const InfoBlock = ({
  buttonText = '',
  buttonUrl = '',
  imgUrl,
  linkText = '',
  linkUrl = '',
  name = '',
  text = '',
}) => {
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
        {!!buttonText && !!buttonUrl && (
          <LinkButton theme="secondary" buttonUrl={buttonUrl} className={cx('link_secondary')}>
            {buttonText}
          </LinkButton>
        )}
      </div>
      {!!linkUrl && !!linkText && (
        <LinkWrapper className={cx('link')} isUnderline={true} linkText={linkText} linkUrl={linkUrl} />
      )}
    </div>
  );
};
