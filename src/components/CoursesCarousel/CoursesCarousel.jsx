import { useEffect } from 'react';
import Slider from 'react-slick';
import cn from 'classnames/bind';

import { CourseBlock } from '../CourseBlock/CourseBlock';
import { Arrow } from '../Arrow/Arrow';
import { useResize } from '../../hooks/useResize';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const ButtonPrev = ({ setIndex, ...props }) => {
  const { onClick, currentSlide } = props;
  const isFirstSlide = currentSlide === 0;

  useEffect(() => {
    setIndex(currentSlide);
  }, [currentSlide]);

  return (
    <button className={cx('button', 'button_left', { button_disabled: isFirstSlide })} onClick={onClick}>
      <Arrow className={cx('arrow-img', 'arrow-img_left')} />
    </button>
  );
};

const ButtonNext = ({ setIndex, data, ...props }) => {
  const { onClick, currentSlide } = props;
  const isLastSlide = data && currentSlide === data.length - 1;

  useEffect(() => {
    setIndex(currentSlide);
  }, [currentSlide]);

  return (
    <button className={cx('button', 'button_right', { button_disabled: isLastSlide })} onClick={onClick}>
      <Arrow className={cx('arrow-img', 'arrow-img_right')} direction="right" />
    </button>
  );
};

export const CoursesCarousel = ({ data, setIndex }) => {
  const { isScreenMobile } = useResize();

  return (
    <Slider
      className={cx('carousel')}
      dots={isScreenMobile}
      slidesToShow={1}
      slidesToScroll={1}
      infinite={false}
      nextArrow={<ButtonNext setIndex={setIndex} data={data} />}
      prevArrow={<ButtonPrev setIndex={setIndex} />}
    >
      {data.map((item) => (
        <CourseBlock
          name={item.name}
          description={item.description}
          text={item.text}
          key={item.name + item.description}
        />
      ))}
    </Slider>
  );
};
