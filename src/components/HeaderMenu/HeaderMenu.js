import React from 'react';

import './HeaderMenu.css';

const HeaderMenu = () => {
  return (
    <div className='header__menu'>
      <ul className='header__menu-container'>
        <li>
          <a
            className='header__menu-link header__menu-lin--arrow'
            href='#'
          >
            проекты
          </a>
        </li>
        <li>
          <a href='#'>фото работ</a>
        </li>
        <li>
          <a href='#'>акции</a>
        </li>
        <li>
          <a
            className='header__menu-link header__menu-lin--arrow'
            href='#'
          >
            услуги
          </a>
        </li>
        <li>
          <a
            className='header__menu-link header__menu-lin--arrow'
            href='#'
          >
            заказчику
          </a>
        </li>
        <li>
          <a href='#'>контакты</a>
        </li>
        <li>
          <a
            className='header__menu-link header__menu-link--like'
            href='#'
          >
            избранное
          </a>
        </li>
        <li>
          <a
            className='header__menu-link header__menu-link--search'
            href='#'
          >
            поиск
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
