import Slider from 'react-slick';
import cn from 'classnames/bind';

import { CourseBlock } from '../CourseBlock/CourseBlock';

import arrow from '../../images/icons/arrow-small.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

const cx = cn.bind(styles);

export const OnlineCarousel = ({ data, setIndex }) => {
  const handleShowPreviousSlide = ({ currentSlide, isFirstSlide }) => {
    if (!isFirstSlide) {
      setIndex(currentSlide);
    }
  };

  const handleShowNextSlide = ({ currentSlide, isLastSlide }) => {
    if (!isLastSlide) {
      setIndex(currentSlide);
    }
  };

  const ButtonPrev = (props) => {
    const { onClick, currentSlide } = props;
    const isFirstSlide = currentSlide === 0;

    return (
      <button className={cx('button', 'button_left', { button_disabled: isFirstSlide })} onClick={onClick}>
        <div className={cx('arrow-img-wrapper')} onClick={handleShowPreviousSlide({ currentSlide, isFirstSlide })}>
          <img className={cx('arrow-img')} src={arrow} alt="Предыдущий" />
        </div>
      </button>
    );
  };

  const ButtonNext = (props) => {
    const { onClick, currentSlide } = props;
    const isLastSlide = data && currentSlide === data.length - 1;

    return (
      <button className={cx('button', 'button_right', { button_disabled: isLastSlide })} onClick={onClick}>
        <div className={cx('arrow-img-wrapper')} onClick={handleShowNextSlide({ currentSlide, isLastSlide })}>
          <img className={cx('arrow-img', 'arrow-img_right')} src={arrow} alt="Следующий" />
        </div>
      </button>
    );
  };

  return (
    <Slider
      className={cx('carousel')}
      slidesToShow={1}
      slidesToScroll={1}
      infinite={false}
      nextArrow={<ButtonNext />}
      prevArrow={<ButtonPrev />}
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
