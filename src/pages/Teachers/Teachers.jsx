import cn from 'classnames/bind'

import styles from './styles.module.css'

const cx = cn.bind(styles)

export const Teachers = () => {
  return (
    <div className={cx('page')}>
      <p>Teachers</p>
    </div>
  )
}
