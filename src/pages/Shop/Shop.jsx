import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';

import { URL } from '../../constants';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';

const cx = cn.bind(styles);

export const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ url: './data/shop.json', callback: setData });
  }, []);

  return (
    <div className={cx('shop')}>
      {data.map((item) => (
        <ShopItemBlock
          additionalText={item.additionalText}
          buttonText={item.buttonText}
          buttonUrl={item.buttonUrl}
          className={cx('item')}
          imgUrl={item.imgUrl}
          linkText={item.linkText}
          linkUrl={item.linkUrl}
          name={item.name}
          price={item.price}
          text={item.text}
          key={item.name + item.url}
        />
      ))}
    </div>
  );
};
