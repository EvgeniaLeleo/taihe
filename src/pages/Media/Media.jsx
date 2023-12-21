import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { Preloader } from '../../components/Preloader/Preloader';

import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';
import { useResize } from '../../hooks/useResize';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const Media = () => {
  const { getData, isLoading, setIsCoursesPage, setIsShopPage } = getStore;

  const { isScreenMobile } = useResize();

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsShopPage(false);
    setIsCoursesPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/media.json', callback: setData });
  }, [data.length]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <MainWrapper className={cx('wrapper')}>
      <div className={cx('media')}>
        {data.map((item) => (
          <InfoBlock
            name={item.name}
            imgUrl={isScreenMobile ? item.imgUrlMobile : item.imgUrl}
            linkUrl={item.linkUrl}
            linkText={item.linkText}
            key={item.name + item.url}
          />
        ))}
      </div>
    </MainWrapper>
  );
};

export default observer(Media);
