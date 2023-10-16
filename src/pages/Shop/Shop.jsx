import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Shop = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsShopPage(true);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/shop.json', callback: setData });
  }, [data.length]);

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
