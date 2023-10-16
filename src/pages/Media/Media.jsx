import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { getData } from '../../utils/getData';

import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Media = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ url: './data/media.json', callback: setData });
  }, []);

  return (
    <div className={cx('media')}>
      {data.map((item) => (
        <InfoBlock
          name={item.name}
          imgUrl={item.imgUrl}
          linkUrl={item.linkUrl}
          linkText={item.linkText}
          key={item.name + item.url}
        />
      ))}
    </div>
  );
};
