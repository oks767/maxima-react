import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from '../Theme/Theme';

import './Header.css';

import header__logo from '../../images/logo.svg';
import flag from '../../images/flag.svg';
import stars from '../../images/stars.svg';
import calc from '../../images/calc.svg';
import social from '../../images/socials.svg';
import HeaderMenu from '../HeaderMenu/HeaderMenu.js';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const DarkTheme = 'Dark theme';
  const LightTheme = 'Light theme';
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className='wrapper'>
        <header className='header'>
          <div className='header__container'>
            <a href='#'>
              <img
                className='header__logo'
                src={header__logo}
                alt='logo img'
              />
            </a>

            <div className='header__raiting'>
              <img
                src={flag}
                alt='flag img'
              />
              <div className='header__raiting-inner'>
                <img
                  src={stars}
                  alt='stars img'
                />
                <p className='header__raiting-text'>
                  <span>Рейтинг в Google</span> <br />
                  на основании 180 отзывов
                </p>
              </div>
            </div>

            <button className='header__button'>
              <span>Прислать проект на расчет</span>
              <img
                src={calc}
                alt='calculator img'
              />
            </button>

            <div className='header__whatsapp'>
              <span>Мы онлайн</span>
              <a href='#'>
                <img
                  src={social}
                  alt='whatsapp icon'
                />
              </a>
            </div>

            <div className='header__contacts'>
              <span>Без выходных с 10:00 до 20:00</span>
              <a
                className='header__contacts-tel'
                href='tel:+78000000000'
              >
                +7(800)000-00-00
              </a>
              <a
                className='header__contacts-link'
                href='#'
              >
                Заказать обратный звонок
              </a>
            </div>
            <button
              className='header__button-theme'
              onClick={switchTheme}
            >
              {theme === 'light' ? LightTheme : DarkTheme}
            </button>
          </div>
        </header>
        <HeaderMenu />
      </div>
    </ThemeProvider>
  );
};

export default Header;
