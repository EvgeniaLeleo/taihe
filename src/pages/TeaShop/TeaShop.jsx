import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { Arrow } from '../../components/Arrow/Arrow';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { ROUTES } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const TeaShop = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState(null);

  useEffect(() => {
    setIsShopPage(true);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/tea-shop.json', callback: setData });
  }, []);

  return (
    <MainWrapper>
      <LinkWrapper
        className={cx('link-back')}
        isUnderline={false}
        linkText={
          <>
            <Arrow className={cx('arrow-icon')} />
            вернуться в магазин
          </>
        }
        linkUrl={ROUTES.shop}
        type="nav"
      />

      {!!data && (
        <>
          <h2 className={cx('page-title')}>{data.title}</h2>
          <div className={cx('page-description')}>
            {data.description.split('\n').map((chunk) => (
              <p className={cx('description__paragraph')} key={chunk}>
                {chunk}
              </p>
            ))}
          </div>

          <div>
            {data.type.map((type) => {
              return (
                <section className={cx('tea-type')} key={type.name}>
                  <h2 className={cx('tea-title')}>{type.name}</h2>
                  {type.list.map((item) => (
                    <ShopItemBlock
                      amount={item.amount}
                      className={cx('item')}
                      imgUrl={item.imgUrl}
                      inStock={item.inStock}
                      name={item.name}
                      text={item.text}
                      key={item.name + item.text}
                    />
                  ))}
                </section>
              );
            })}
          </div>
        </>
      )}
    </MainWrapper>
  );
};

export default observer(TeaShop);
