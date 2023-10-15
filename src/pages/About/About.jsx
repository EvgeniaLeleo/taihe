import cn from 'classnames/bind'

import styles from './styles.module.css'
import img from '../../images/about.jpg'

const cx = cn.bind(styles)

export const About = () => {
  return (
    <div className={cx('about')}>
      <img className={cx('about__image')} src={img} alt="" />
      <div className={cx('text-wrapper')}>
        <p className={cx('description')}>
          Мы объединяем всех, кому нравится быть здоровыми и счастливыми, кому
          интересно исследовать себя и окружающий мир. Нам и нашим друзьям важно
          жить в гармонии с Природой, с другими людьми, а главное - с самими
          собой. Среди нас тайцзишники и цигунисты, остеопаты, врачи, учителя,
          художники, музыканты и просто хорошие люди.
        </p>
      </div>
    </div>
  )
}
