import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import cn from 'classnames/bind';

import { CourseBlock } from '../CourseBlock/CourseBlock';

import arrow from '../../images/icons/arrow-small.svg';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const FeedbackCarousel = ({ data, setIndex }) => {
  // console.log(data);
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

  return (
    <CarouselProvider
      className={cx('carousel')}
      // naturalSlideWidth={510}
      // naturalSlideHeight={100}
      totalSlides={data.length}
    >
      <ButtonBack
        className={cx('button', 'button_left', { button_disabled: isFirstSlide })}
        onClick={handleShowPreviousSlide}
      >
        <img className={cx('arrow-img')} src={arrow} alt="Предыдущий" />
      </ButtonBack>

      <Slider className={cx('MMMslider')}>
        {data.map((item, index) => (
          <Slide index={index} className={cx('slide')} key={item.name + item.text}>
            <CourseBlock name={item.name} description={item.description} text={item.text} />
          </Slide>
        ))}
      </Slider>

      <ButtonNext
        className={cx('button', 'button_right', { button_disabled: isLastSlide })}
        onClick={handleShowNextSlide}
      >
        <img className={cx('arrow-img', 'arrow-img_right')} src={arrow} alt="Следующий" />
      </ButtonNext>
    </CarouselProvider>
  );
};
