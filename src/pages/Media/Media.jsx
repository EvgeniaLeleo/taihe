import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { getData } from '../../utils/getData';

import styles from './styles.module.css';
import { getStore } from '../../utils/getStore';

const cx = cn.bind(styles);

export const Media = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(false);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ url: './data/media.json', callback: setData });
  }, [data.length]);

  return (
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
  );
};
