import React from 'react';

import style from './HeaderMenu.css';

const HeaderMenu = () => {
  return (
    <div className='headerMenu'>
      <ul className='headerMenuContainer'>
        <li>
          <a
            className='headerLink headerLink--arrow'
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
            className='headerLink--arrow'
            href='#'
          >
            услуги
          </a>
        </li>
        <li>
          <a
            className='headerLink--arrow'
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
            className='headerLink headerLink--like'
            href='#'
          >
            избранное
          </a>
        </li>
        <li>
          <a
            className='headerLink headerLink--search'
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
