import React from 'react';

import style from './Header.css';

import logo from '../../images/logo.svg';
import flag from '../../images/flag.svg';
import stars from '../../images/stars.svg';
import calc from '../../images/calc.svg';
import social from '../../images/socials.svg';
import HeaderMenu from '../HeaderMenu/HeaderMenu.js';

const Header = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='headerContainer'>
          <a href='#'>
            <img
              className='logo'
              src={logo}
            />
          </a>

          <div className='headerRaiting'>
            <img src={flag} />
            <div className='headerRaitingInner'>
              <img src={stars} />
              <p className='headerRaitingText'>
                <span>Рейтинг в Google</span> <br />
                на основании 180 отзывов
              </p>
            </div>
          </div>

          <button className='headerButton'>
            <span>Прислать проект на расчет</span>
            <img src={calc} />
          </button>

          <div className='headerWhatsapp'>
            <span>Мы онлайн</span>
            <a href='#'>
              <img src={social} />
            </a>
          </div>

          <div className='headerContacts'>
            <span>Без выходных с 10:00 до 20:00</span>
            <a
              className='headerTel'
              href='tel:+78000000000'
            >
              +7(800)000-00-00
            </a>
            <a
              className='headerLink'
              href='#'
            >
              Заказать обратный звонок
            </a>
          </div>
        </div>
      </header>
      <HeaderMenu />
    </div>
  );
};

export default Header;
