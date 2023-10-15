import cn from 'classnames/bind'

import styles from './style.module.css'

const cx = cn.bind(styles)

export const Button = ({ theme, children = '', size = 's' }) => {
  return (
    <button
      className={cx(
        'button',
        { button_primary: theme === 'primary' },
        { button_secondary: theme === 'secondary' },
        { button_size_s: size === 's' },
        { button_size_m: size === 'm' },
      )}
      type="button"
    >
      {children}
    </button>
  )
}
