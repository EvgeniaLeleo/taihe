import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';
import { useResize } from '../../hooks/useResize';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Shop = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState([]);

  const { isScreenMobile } = useResize();

  useEffect(() => {
    setIsShopPage(true);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/shop.json', callback: setData });
  }, [data.length]);

  return (
    <MainWrapper className={cx('wrapper')}>
      {data.map((item) => (
        <ShopItemBlock
          additionalText={item.additionalText}
          buttonText={item.buttonText}
          buttonUrl={item.buttonUrl}
          imgUrl={isScreenMobile ? item.imgUrlMobile : item.imgUrl}
          inStock={item.inStock}
          linkText={item.linkText}
          linkUrl={item.linkUrl}
          name={item.name}
          price={item.price}
          text={item.text}
          key={item.name + item.url}
        />
      ))}
    </MainWrapper>
  );
};
