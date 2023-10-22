import React from 'react';

import './Calculator.css';

import home from '../../images/house.png';
import sauna from '../../images/sauna.png';
import tap from '../../images/tap.svg';
import men from '../../images/men.png';
import unlock from '../../images/unlock.svg';
import lock from '../../images/lock.svg';
import checked from '../../images/checkbox-cheked.svg';
import unchecked from '../../images/checkbox-unchecked.svg';
import calcFlag from '../../images/Vector.png';
import derevo from '../../images/Derevo-2.png';

import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';
import House from '../House/House';

const Calculator = () => {
  const text = 'Далее';
  return (
    <>
      <div className='calculator__wrapper'>
        <img
          className='calculator__derevo'
          src={derevo}
          alt='derevo img'
        />
        <div className='calculator'>
          <div className='calculator__container'>
            <div className='calculator__left'>
              <h2 className='calculator__title'>
                Рассчитайте предварительную стоимость{' '}
                <span>дома за 1 минуту</span>
              </h2>
              <div className='calculator__line'></div>
              <div className='calculator__left-title'>
                <span>01.</span>
                <h3>Что будем строить?</h3>
              </div>
              <div className='calculator__cards'>
                <div>
                  <img
                    src={home}
                    alt='home img'
                  />
                  <Checkbox image={checked} />
                </div>
                <div>
                  <img
                    src={sauna}
                    alt='sauna img'
                  />
                  <Checkbox image={unchecked} />
                </div>
              </div>

              <div className='calculator__bottom'>
                <div className='calculator__bottom-text'>
                  <img
                    src={tap}
                    alt='tap img'
                  />

                  <p>
                    <span>Нажимайте на вариант ответа</span> и переходите к
                    следующему вопросу
                  </p>
                </div>
                <Button props={text} />
              </div>
            </div>

            <div className='calculator__right'>
              <img
                className='calculator__cards-flag'
                src={calcFlag}
              />
              <div className='calculator__right-card'>
                <img
                  src={men}
                  alt='men img'
                />
                <h3 className='calculator__right-title'>Михаил Иванов</h3>
                <span>Ведущий архитектор</span>

                <p className='calculator__right-text'>
                  Ответив на вопросы <span>вы получите:</span>
                </p>

                <ul className='calculator__list'>
                  <li className='calculator__list-item'>
                    <img
                      src={unlock}
                      alt='unlock'
                    />
                    <p>Гарантированную скидку</p>
                    <span>1%</span>
                  </li>
                  <li className='calculator__list-item calculator__list-item--bg-1'>
                    <img
                      src={lock}
                      alt='unlock'
                    />
                    <p>Ориентировочную стоимость строительства</p>
                  </li>
                  <li className='calculator__list-item calculator__list-item--bg-2'>
                    <img
                      src={lock}
                      alt='unlock'
                    />
                    <p>Точную подборку проектов исходя изваших ответов</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
