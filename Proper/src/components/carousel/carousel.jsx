import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Carousel = ({ images = [] }) => {
  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#bbbbbb',
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-bullet-inactive-color': '#cecece',
          }
        }
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper p-0"
      >
        
        {images.map(({ src, alt, titulo, descripcion }) => (
          <SwiperSlide key={alt}>
            <div className="w-full h-full">
              <img src={src} alt={alt} />
              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/65 lg:from-black/80  via-black/25 md:via-black/35 lg:via-black/45 to-black/60 md:to-black/65 lg:to-black/80" />
              {/* gradient */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <p className="mt-2  font-bold text-3xl md:text-4xl lg:text-6xl leading-relaxed">
                    {titulo}
                  </p>
                  <p className="mt-2 text-sm md:text-lg leading-relaxed">
                    {descripcion}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}