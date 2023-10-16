import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';

import styles from './styles.module.css';
import { ROUTES } from '../../constants';

const cx = cn.bind(styles);

export const Sidebar = () => {
  return (
    <nav className={cx('sidebar')}>
      <ul className={cx('sidebar-list')}>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.main}
          >
            О клубе Тай Хэ
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.lineage}
          >
            Линия передачи
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.teachers}
          >
            Преподаватели
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.library}
          >
            Библиотека
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.media}
          >
            Фото и видео
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.feedback}
          >
            Отзывы
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.online}
          >
            Онлайн школа (курсы в записи)
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.shop}
          >
            Магазин
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.contacts}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
