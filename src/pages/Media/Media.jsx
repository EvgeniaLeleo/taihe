import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Media = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/media.json', callback: setData });
  }, [data.length]);

  return (
    <MainWrapper>
      <div className={cx('media')}>
        {data.map((item) => (
          <InfoBlock
            name={item.name}
            imgUrl={item.imgUrl}
            linkUrl={item.linkUrl}
            linkText={item.linkText}
            key={item.name + item.url}
          />
        ))}
      </div>
    </MainWrapper>
  );
};
