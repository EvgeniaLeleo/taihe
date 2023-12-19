import { useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { FeedbackBlock } from '../../components/FeedbackBlock/FeedbackBlock';
import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { HeaderBorderBottom } from '../../components/HeaderBorderBottom/HeaderBorderBottom';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';
import { useResize } from '../../hooks/useResize';

import { VISIBLE_FEEDBACK } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const Feedback = () => {
  const { getData, setIsCoursesPage, setIsShopPage } = getStore;

  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState(data);
  const [count, setCount] = useState(2);
  const [isRemainingFeedback, setIsRemainingFeedback] = useState();

  const { isScreenMobile } = useResize();

  useEffect(() => {
    setIsShopPage(false);
    setIsCoursesPage(false);
    scrollToTop();
  }, []);

  useEffect(() => {
    getData({ url: './data/feedback.json', callback: setData });
    setVisibleData(data.slice(0, VISIBLE_FEEDBACK));
    setIsRemainingFeedback(data.length > VISIBLE_FEEDBACK);
  }, [data.length]);

  const handleShowMore = () => {
    if (isRemainingFeedback) {
      setVisibleData(data.slice(0, count * VISIBLE_FEEDBACK));
      setIsRemainingFeedback(data.length > count * VISIBLE_FEEDBACK);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <HeaderBorderBottom />
      <MainWrapper className={cx('wrapper')}>
        <div className={cx('feedback-wrapper')}>
          <div className={cx('feedback')}>
            {visibleData.map((item) => (
              <FeedbackBlock name={item.name} course={item.course} text={item.text} key={item.name + item.text} />
            ))}
          </div>

          <footer className={cx('footer')}>
            {isRemainingFeedback && (
              <LinkWrapper
                className={cx('button-read-more')}
                linkText="Читать далее"
                onClick={handleShowMore}
                type="button"
              />
            )}
          </footer>
        </div>
      </MainWrapper>
    </>
  );
};
