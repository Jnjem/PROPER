import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./coverflowSwiper/coverflowSwiper.css";
import Modal from "./Modal/modal";

export function FUNCIONMODAL({
  nombre,
  descripcion,
  pais,
  imagen,
  video = null, // Nuevo parámetro para videos
  allowModal = true,
  isCarousel = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const formatProjectName = (projectName) => {
    return projectName.replace(/\s+/g, "_");
  };

  const getImagePath = (projectName, index) => {
    const formattedName = formatProjectName(projectName);
    return `src/assets/img/${formattedName}/${index}.jpg`;
  };

  const totalImages = 5;

  const [currentImages, setCurrentImages] = useState(
    Array.from({ length: totalImages }, (_, i) => getImagePath(nombre, i + 1))
  );

  const openModal = () => {
    if (allowModal) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="hover:scale-105 duration-300">
        <div
          className="h-56 bg-cover bg-center rounded-lg overflow-hidden"
          onClick={handleClick}
        >
          {video ? (
            <video
              src={video}
              className="w-full h-full object-cover"
                        
            />
          ) : (
            <div
              style={{ backgroundImage: `url(${imagen})` }}
              className="w-full h-full bg-cover bg-center"
            />
          )}
        </div>
        <div className="text-white rounded-lg text-left">
          <h3 className="text-lg font-bold">{nombre}</h3>
          <p className="text-gray-300">{pais}</p>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col md:flex-row w-full mx-auto bg-white rounded-lg overflow-hidden">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center">
              {video ? (
                <video
                  src={video}
                  controls
                  className="w-full h-96 object-cover rounded-lg"
                />
              ) : isCarousel ? (
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1}
                  loop={false}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                  {currentImages.map((imagePath, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={imagePath}
                        alt="imagen del proyecto"
                        className="w-full h-auto rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div
                  className="w-full h-96 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${imagen})` }}
                />
              )}
            </div>
            <div className="mt-2">
              <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
              <p className="text-sm text-gray-600 mt-2">{descripcion}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
