import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';

import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { getData } from '../../utils/getData';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import arrow from '../../images/icons/arrow-small.svg';

import { ROUTES } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const TeaShop = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(true);
    scrollToTop();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    getData({ url: './data/tea-shop.json', callback: setData });
  }, []);

  return (
    <div className={cx('shop')}>
      <NavLink className={cx('link-back')} to={ROUTES.shop}>
        <img className={cx('arrow-icon')} src={arrow} alt="Вернуться в магазин" />
        вернуться в магазин
      </NavLink>

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
    </div>
  );
};

export default observer(TeaShop);
