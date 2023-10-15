import { Outlet } from 'react-router-dom'
import cn from 'classnames/bind'

import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Footer } from '../../components/Footer/Footer'

import styles from './styles.module.css'

const cx = cn.bind(styles)

export const PageWrapper = () => {
  return (
    <div className={cx('page')}>
      <Header />
      <main className={cx('main')}>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
