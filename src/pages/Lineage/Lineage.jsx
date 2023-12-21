import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { TeacherBlock } from '../../components/TeacherBlock/TeacherBlock';
import { Preloader } from '../../components/Preloader/Preloader';

import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';
import { useResize } from '../../hooks/useResize';

import styles from './styles.module.css';

const cx = cn.bind(styles);

const Lineage = () => {
  const { getData, isLoading, setIsCoursesPage, setIsShopPage } = getStore;

  const [data, setData] = useState(null);

  const { isScreenMobile } = useResize();

  useEffect(() => {
    setIsShopPage(false);
    setIsCoursesPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/lineage.json', callback: setData });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={cx('lineage')}>
      {!!data && (
        <>
          {data.map((teacher) => (
            <TeacherBlock
              imgUrl={isScreenMobile ? teacher.imgUrlMobile : teacher.imgUrl}
              name={teacher.name}
              description={teacher.description}
              teacher={teacher}
              key={teacher.name}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default observer(Lineage);
