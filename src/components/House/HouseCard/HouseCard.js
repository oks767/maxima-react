import React from 'react';
import './HouseCard.css';
const HouseCard = ({ widthCard, titleCard, heightCard, priceCard }) => {
  return (
    <div
      className='card__wrapper'
      style={{ width: widthCard, height: heightCard }}
    >
      <div className='card__inner'>
        <div className='card__title'>
          <h3>{titleCard}</h3>
        </div>
        <span>100+ проектов</span>
      </div>
      <div className='card__flex'>
        <div className='card__price'>
          <span>от</span>
          <p>{priceCard}</p>
          <span>руб/м</span>
        </div>
        <button className='house__card-button'>смотреть проекты</button>
      </div>
    </div>
  );
};

export default HouseCard;
