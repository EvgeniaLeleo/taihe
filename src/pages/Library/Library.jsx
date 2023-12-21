import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { ListBlock } from '../../components/ListBlock/ListBlock';
import { HeaderBorderBottom } from '../../components/HeaderBorderBottom/HeaderBorderBottom';
import { Preloader } from '../../components/Preloader/Preloader';

import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const Library = () => {
  const { getData, isLoading, setIsCoursesPage, setIsShopPage } = getStore;

  const [data, setData] = useState(null);

  useEffect(() => {
    setIsShopPage(false);
    setIsCoursesPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/library.json', callback: setData });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <HeaderBorderBottom />
      <MainWrapper className={cx('wrapper')}>
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
    </>
  );
};

export default observer(Library);
