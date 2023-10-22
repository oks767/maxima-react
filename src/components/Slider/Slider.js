import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div className='slider__wrapper'>
      <div className='slider__container'>
        <h1 className='slider__title'>
          Акции и подарки <span>для каждой семьи</span>
        </h1>
        <div className='slider__cards'>
          <div className='card slider-img-one'>
            <h3>Любая перепланировка в подарок!</h3>
            <p>
              Рыбатекст используется дизайнерами, проектировщиками и
              фронтендерами, когда нужно выстро заполнить макеты или прототипы
              содержимым.
            </p>
            <button className='slider__button'>перейти к акции</button>
          </div>
          <div className='card slider-img-two'>
            <h3>Металлическая дверь в подарок!</h3>
            <p>
              Рыбатекст используется дизайнерами, проектировщиками и
              фронтендерами, когда нужно выстро заполнить макеты или прототипы
              содержимым.
            </p>
            <button className='slider__button'>перейти к акции</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
