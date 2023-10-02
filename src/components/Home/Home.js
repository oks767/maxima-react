import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import Button from '../../UI/Button/Button';

import brigad from '../../images/brigad.svg';
import kist from '../../images/kist.svg';
import okay from '../../images/okay.svg';
import list from '../../images/list.svg';
import derevo from '../../images/Derevo-1.png';

import Calculator from '../Calculator/Calculator';

const Home = () => {
  const text = 'рассчитать стоимость';
  return (
    <div className='wrapper'>
      <div className='home'>
        <img
          className='home__derevo'
          src={derevo}
          alt='derevo img'
        />
        <Header />
        <div className='home__container'>
          <h1 className='home__title'>
            <span>Строительство деревянных домов</span> <br />
            под ключ в Курске
          </h1>
          <p className='home__text'>
            <span>Построим теплый и надежный дом</span> <br /> с гарантией 10
            лет
          </p>
          <Button props={text} />

          <div className='home__cards'>
            <div>
              <img
                src={brigad}
                alt='icon brigada'
              />
              <p>40 собственных опытных бригад</p>
            </div>
            <div>
              <img
                src={kist}
                alt='icon brigada'
              />
              <p>Свое производство строительных материалов</p>
            </div>
            <div>
              <img
                src={okay}
                alt='icon brigada'
              />
              <p>Тысячи довольных клиентов с 1998 года</p>
            </div>
            <div>
              <img
                src={list}
                alt='icon brigada'
              />
              <p>Гарантия на все строительные работы по договору</p>
            </div>
          </div>
        </div>
      </div>
      <div className='home__calculator'>
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
