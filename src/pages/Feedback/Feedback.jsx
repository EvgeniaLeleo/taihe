import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames/bind';

import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { FeedbackBlock } from '../../components/FeedbackBlock/FeedbackBlock';
import { LinkWrapper } from '../../components/LinkWrapper/LinkWrapper';
import { HeaderBorderBottom } from '../../components/HeaderBorderBottom/HeaderBorderBottom';
import { Preloader } from '../../components/Preloader/Preloader';
import { getStore } from '../../utils/getStore';
import { scrollToTop } from '../../utils/scrollToTop';

import { VISIBLE_FEEDBACK } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const Feedback = () => {
  const { getData, isLoading, setIsCoursesPage, setIsShopPage } = getStore;

  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState(data);
  const [count, setCount] = useState(2);
  const [isRemainingFeedback, setIsRemainingFeedback] = useState();

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

  if (isLoading) {
    return <Preloader />;
  }

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

export default observer(Feedback);
