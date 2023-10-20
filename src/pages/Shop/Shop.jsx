import { useEffect, useState } from 'react';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

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
    <MainWrapper>
      {data.map((item) => (
        <ShopItemBlock
          additionalText={item.additionalText}
          buttonText={item.buttonText}
          buttonUrl={item.buttonUrl}
          imgUrl={item.imgUrl}
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
