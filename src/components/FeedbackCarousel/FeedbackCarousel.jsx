import { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import cn from 'classnames/bind';

import { CourseBlock } from '../CourseBlock/CourseBlock';

import arrow from '../../images/icons/arrow-small.svg';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const FeedbackCarousel = ({ data, setIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstSlide = currentIndex === 0;

  const isLastSlide = data && currentIndex === data.length - 1;

  const handleShowPreviousSlide = () => {
    if (!isFirstSlide) {
      setIndex(currentIndex - 1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleShowNextSlide = () => {
    if (!isLastSlide) {
      setIndex(currentIndex + 1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const ButtonBack = (
    <button
      className={cx('button', 'button_left', { button_disabled: isFirstSlide })}
      onClick={handleShowPreviousSlide}
    >
      <img className={cx('arrow-img')} src={arrow} alt="Предыдущий" />
    </button>
  );

  const ButtonNext = (
    <button className={cx('button', 'button_right', { button_disabled: isLastSlide })} onClick={handleShowNextSlide}>
      <img className={cx('arrow-img', 'arrow-img_right')} src={arrow} alt="Следующий" />
    </button>
  );

  return (
    <Carousel
      className={cx('carousel')}
      children={data}
      infinite={false}
      swiping={true}
      // responsive={true}
      useArrowKeys={true}
      leftArrow={ButtonBack}
      rightArrow={ButtonNext}
    >
      {data.map((item) => (
        <CourseBlock
          name={item.name}
          description={item.description}
          text={item.text}
          key={item.name + item.description}
        />
      ))}
    </Carousel>
  );
};
