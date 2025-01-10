import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import ColiseoImage from '../../assets/img/coliseo.png';
import Rm from '../../assets/img/rm.png';
import Rompido from '../../assets/img/rompido.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './coverflowSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const lista = [
  ColiseoImage, 
  Rm, 
  Rompido,
];

export default function CoverflowSwiper() {
  const swiperRef = useRef(null);

  const [descripcion, setDescripcion] = useState(lista[0]);

  const handleSlideChange = (swiper) => {
    setDescripcion(lista[swiper.realIndex]);
    console.log(swiper.realIndex);
  };

  return (
    <div className="mt-8">
      <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }}
        breakpoints={
          {
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
              },
              640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
              },
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
          }
      }
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={false}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 200,
          modifier: 2,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        ref={swiperRef}
        onRealIndexChange={handleSlideChange}
      >
        {lista.map((imagen, index) => (
          <SwiperSlide key={index}>
              <img src={imagen} alt="imagen del proyecto" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='text-center flex justify-center mt-4'>
        <div className="w-3/4 h-40">
          <p className="font-bold line-clamp-[7]">Aqui se encuentra un parrafo con la descripcion del proyecto</p>
        </div>
      </div>
    </div>
  );
}

