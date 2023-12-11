import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cn from 'classnames/bind';

import { getStore } from '../../utils/getStore';

import { ROUTES } from '../../constants';
import styles from './styles.module.css';

const cx = cn.bind(styles);

const Sidebar = () => {
  const { isMobileMenuVisible, isShopPage, setIsMobileMenuVisible } = getStore;

  const handleHideMenu = () => {
    setIsMobileMenuVisible(false);
  };

  return (
    <nav className={cx('sidebar_desktop', { sidebar_mobile: isMobileMenuVisible })}>
      {isMobileMenuVisible && (
        <button className={cx('sidebar_mobile__button-close')} onClick={handleHideMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.709 1.707A1 1 0 0 0 12.294.293L7.001 5.587 1.707.293A1 1 0 0 0 .293 1.707l5.294 5.294-5.294 5.293a1 1 0 1 0 1.414 1.415l5.294-5.294 5.293 5.294a1 1 0 0 0 1.415-1.415L8.415 7.001l5.294-5.294Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <ul className={cx('sidebar-list')}>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.main}
            onClick={handleHideMenu}
          >
            О&nbsp;клубе Тай&nbsp;Хэ
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.lineage}
            onClick={handleHideMenu}
          >
            Линия передачи
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.teachers}
            onClick={handleHideMenu}
          >
            Преподаватели
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.library}
            onClick={handleHideMenu}
          >
            Библиотека
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.media}
            onClick={handleHideMenu}
          >
            Фото и&nbsp;видео
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.feedback}
            onClick={handleHideMenu}
          >
            Отзывы
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.online}
            onClick={handleHideMenu}
          >
            Онлайн школа (курсы в&nbsp;записи)
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive || isShopPage })}
            to={ROUTES.shop}
            onClick={handleHideMenu}
          >
            Магазин
          </NavLink>
        </li>
        <li className={cx('sidebar-item')}>
          <NavLink
            className={({ isActive }) => cx('sidebar-link', { 'sidebar-item_active': isActive })}
            to={ROUTES.contacts}
            onClick={handleHideMenu}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default observer(Sidebar);
