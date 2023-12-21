import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { Preloader } from '../../components/Preloader/Preloader';

import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';
import { useResize } from '../../hooks/useResize';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const Shop = () => {
  const { getData, isLoading, setIsCoursesPage, setIsShopPage } = getStore;

  const [data, setData] = useState([]);

  const { isScreenMobile } = useResize();

  useEffect(() => {
    setIsShopPage(true);
    setIsCoursesPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/shop.json', callback: setData });
  }, [data.length]);

  if (isLoading) {
    return <Preloader />;
  }

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

export default observer(Shop);
