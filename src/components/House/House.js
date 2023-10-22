import React from 'react';
import HouseCard from './HouseCard/HouseCard';
import './House.css';

const House = () => {
  return (
    <div className='house__wrapper'>
      <div className='house__container'>
        <h1 className='house__title'>
          Мы строим деревянные дома и бани
          <span> с учетом всех особенностей Курска</span>
        </h1>
        <div className='house__cards-wrapper'>
          <div className='house__cards-one'>
            <HouseCard
              titleCard={'Каркасные дома'}
              priceCard={'19 700'}
              heightCard={'351px'}
            />
            <HouseCard
              titleCard={'Дома из бруса'}
              priceCard={'19 700'}
              heightCard={'181px'}
            />
          </div>
          <div className='house__cards-two'>
            <HouseCard
              titleCard={'Бани из бруса'}
              priceCard={'19 700'}
              heightCard={'181px'}
            />
            <HouseCard
              titleCard={'Срубы под усадку'}
              priceCard={'19 700'}
              heightCard={'181px'}
            />
            <HouseCard
              titleCard={'Срубы под усадку'}
              priceCard={'19 700'}
              heightCard={'181px'}
            />
          </div>
          <div className='house__cards-three'>
            <HouseCard
              titleCard={'Срубы под усадку'}
              priceCard={'19 700'}
              heightCard={'181px'}
            />
            <HouseCard
              heightCard={'351px'}
              titleCard={'Каркасные дома'}
              priceCard={'19 700'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
