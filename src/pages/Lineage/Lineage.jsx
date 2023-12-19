import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { TeacherBlock } from '../../components/TeacherBlock/TeacherBlock';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import styles from './styles.module.css';
import { useResize } from '../../hooks/useResize';

const cx = cn.bind(styles);

export const Lineage = () => {
  const { getData, setIsCoursesPage, setIsShopPage } = getStore;

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
