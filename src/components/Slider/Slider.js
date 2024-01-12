import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Slider = () => {
  return (
    <div className='slider__wrapper'>
      <div className='slider__container'>
        <h1 className='slider__title'>
          Акции и подарки <span>для каждой семьи</span>
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className='card slider-img-one'>
              <h3>Любая перепланировка в подарок!</h3>
              <p>
                Рыбатекст используется дизайнерами, проектировщиками и
                фронтендерами, когда нужно выстро заполнить макеты или прототипы
                содержимым.
              </p>
              <button className='slider__button'>перейти к акции</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card slider-img-two'>
              <h3>Металлическая дверь в подарок!</h3>
              <p>
                Рыбатекст используется дизайнерами, проектировщиками и
                фронтендерами, когда нужно выстро заполнить макеты или прототипы
                содержимым.
              </p>
              <button className='slider__button'>перейти к акции</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card slider-img-two'>
              <h3>Металлическая дверь в подарок!</h3>
              <p>
                Рыбатекст используется дизайнерами, проектировщиками и
                фронтендерами, когда нужно выстро заполнить макеты или прототипы
                содержимым.
              </p>
              <button className='slider__button'>перейти к акции</button>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='slider__cards'></div>
      </div>
    </div>
  );
};

export default Slider;
