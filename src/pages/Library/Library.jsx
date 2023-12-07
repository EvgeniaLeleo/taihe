import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ListBlock } from '../../components/ListBlock/ListBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Library = () => {
  const { getData, setIsShopPage } = getStore;

  const [data, setData] = useState(null);

  useEffect(() => {
    setIsShopPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/library.json', callback: setData });
  }, []);

  return (
    <MainWrapper>
      {!!data && (
        <>
          <ListBlock
            className={cx('library-section')}
            title={data.materials.title}
            description={data.materials.description}
            list={data.materials.list}
          />
          <ListBlock
            className={cx('library-section', 'library-section_small-margin')}
            description={data.pdf.description}
            list={data.pdf.list}
          />
          <ListBlock
            className={cx('library-section')}
            title={data.useful.title}
            description={data.useful.description}
            list={data.useful.list}
          />
          <ListBlock
            className={cx('library-section')}
            title={data.brothers.title}
            description={data.brothers.description}
            list={data.brothers.list}
          />
          <ListBlock
            className={cx('library-section')}
            title={data.friends.title}
            description={data.friends.description}
            list={data.friends.list}
          />
        </>
      )}
    </MainWrapper>
  );
};
