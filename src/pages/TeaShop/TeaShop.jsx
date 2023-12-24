import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ShopItemBlock } from '../../components/ShopItemBlock/ShopItemBlock';
import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { Arrow } from '../../components/Arrow/Arrow';
import { Preloader } from '../../components/Preloader/Preloader';

import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { ROUTES } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const TeaShop = () => {
  const { getData, isLoading, setIsCoursesPage, setIsShopPage } = getStore;

  const [data, setData] = useState(null);

  useEffect(() => {
    setIsShopPage(true);
    setIsCoursesPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/tea-shop.json', callback: setData });
  }, []);

  const scrollToElement = (target) => {
    if (target) {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView();
      }
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <MainWrapper className={cx('wrapper')}>
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
            <p className={cx('description__paragraph')}>
              Все сорта приходят ко мне напрямую от китайских друзей с разных концов Поднебесной.
            </p>
            <p className={cx('description__paragraph')}>
              В Санкт-Петербурге заказы можно забрать самим, в другие города отправляю почтой России. Искушенные
              любители уже знают, что заказать, а начинающим свое знакомство с&nbsp;чайной культурой напомню:
            </p>
            <p className={cx('description__paragraph')}>
              <LinkWrapper linkText="Зелёный" onClick={() => scrollToElement('green')} type="button" isInline />
              чай идеален для лета, освежает, бодрит, проясняет ум.
            </p>
            <p className={cx('description__paragraph')}>
              <LinkWrapper linkText="Улуны" onClick={() => scrollToElement('oolong')} type="button" isInline />
              обладают богатым и насыщенным вкусом, все они - хорошая помощь иммунитету. Разнообразие ароматов очень
              велико.
            </p>
            <p className={cx('description__paragraph')}>
              <LinkWrapper linkText="Красные" onClick={() => scrollToElement('red')} type="button" isInline />
              согревают, бодрят и разгоняют кровь. Хороши в холодное и сырое время года.
            </p>
            <p className={cx('description__paragraph')}>
              <LinkWrapper linkText="Шэн пуэры" onClick={() => scrollToElement('puer')} type="button" isInline />
              прекрасно чистят организм, способствуют пищеварению и настраивают на спокойную, ясную активность ума.
            </p>
            <p className={cx('description__paragraph')}>
              <LinkWrapper linkText="Шу пуэры" onClick={() => scrollToElement('puer')} type="button" isInline />
              полезны для сердечно-сосудистой системы, пробуждают, могут стать хорошей альтернативой кофе.
            </p>
            <p className={cx('description__paragraph')}>
              Наше состояние меняется от этого удивительного напитка, в котором каждый может найти что-то своё. Статьи
              про свойства и эффекты разного чая, про тонкости заваривания, чайной посуды и прочим аспектам вы найдете в
              разделе «Библиотека» — «Разные полезности».
            </p>
          </div>

          <div>
            {data.type.map((type) => {
              return (
                <section className={cx('tea-type')} key={type.name}>
                  <h2 className={cx('tea-title')} id={type.id}>
                    {type.name}
                  </h2>
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
