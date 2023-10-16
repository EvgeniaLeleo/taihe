import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { getData } from '../../utils/getData';
import { getStore } from '../../utils/getStore';
import { FeedbackBlock } from '../../components/FeedbackBlock/FeedbackBlock';

import { VISIBLE_FEEDBACK } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Feedback = () => {
  const { setIsShopPage } = getStore;
  useEffect(() => {
    setIsShopPage(false);
  }, []);

  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState(data);
  const [count, setCount] = useState(2);
  const [isRemainingFeedback, setIsRemainingFeedback] = useState();

  useEffect(() => {
    getData({ url: './data/feedback.json', callback: setData });
    setVisibleData(data.slice(0, VISIBLE_FEEDBACK));
    setIsRemainingFeedback(data.length > VISIBLE_FEEDBACK);
  }, [data.length]);

  const showMore = () => {
    if (isRemainingFeedback) {
      setVisibleData(data.slice(0, count * VISIBLE_FEEDBACK));
      setIsRemainingFeedback(data.length > count * VISIBLE_FEEDBACK);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className={cx('feedback-wrapper')}>
      <div className={cx('feedback')}>
        {visibleData.map((item) => (
          <FeedbackBlock name={item.name} course={item.course} text={item.text} key={item.name + item.text} />
        ))}
      </div>

      <footer className={cx('footer')}>
        {isRemainingFeedback && (
          <button className={cx('button-read-more')} onClick={showMore}>
            Читать далее
          </button>
        )}
      </footer>
    </div>
  );
};
