import React, { Component } from 'react';
import perfil1 from '../assets/img/Perfil1_2.jpg';
import banner from '../assets/img/Banner.jpg';
import perfil2 from '../assets/img/Perfil2_1.jpg';
import Signature from '../components/signature/Signature.jsx';
import { TimeLine } from '../components/timeLine/TimeLine';
import { motion } from 'framer-motion';

const fadeInAnimationVariantLeftToRight = {
  initial: { 
      opacity: 0,
      x: -100
  },
  animate: (index = number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2 * (index + 1),
    }
  }),
};

const fadeInAnimationVariantRightToLeft = {
  initial: { 
      opacity: 0,
      x: 100
  },
  animate: (index = number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6 * (index + 1),
    }
  }),
};

const fadeInAnimationVariantBottomToTop = {
  initial: { 
      opacity: 0,
      y: 50
  },
  animate: (index = number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3 * (index + 0.5),
    }
  }),
};

export default class Empresa extends Component {
  render() {
    return (
      <div className="bg-black w-full flex flex-col items-center">
        <div className="h-[89vh] w-full flex items-center justify-center">
          <div>
            <Signature />
          </div>
        </div>

        <div className="bg-gray-100 w-full">
          <section
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(${perfil1})`,
            }}
            className="relative h-[50vh] md:h-[60vh] lg:h-[90vh] bg-no-repeat bg-center bg-cover flex items-center justify-center"
          >
            <img
              src={perfil1}
              alt="Javier Martínez"
              className="object-cover h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
                  variants={fadeInAnimationVariantBottomToTop}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                >
                  JAVIER MARTÍNEZ
                </motion.h1>
                <motion.div
                  className="flex items-center justify-center mb-2 sm:mb-4"
                  variants={fadeInAnimationVariantBottomToTop}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 356.18"
                    className="h-4 w-6 sm:h-6 sm:w-8 mr-2"
                  >
                    <path
                      fill="#FFCD00"
                      d="M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z"
                    />
                    <path
                      fill="#003087"
                      d="M0 178.09h512v149.95c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V178.09z"
                    />
                    <path
                      fill="#C8102E"
                      d="M0 267.137h512v60.903c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04v-60.903z"
                    />
                  </svg>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Bogotá, CO
                  </p>
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-4"
                  variants={fadeInAnimationVariantBottomToTop}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                >
                  Arquitecto Colombo-Español con Maestría en Diseño, Gestión y
                  Dirección de Proyectos de Arquitectura y Urbanismo
                </motion.p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto h-[9/12]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                  variants={fadeInAnimationVariantLeftToRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                >
                  Experiencia y Proyectos Destacados
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base"
                  variants={fadeInAnimationVariantLeftToRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                >
                  Su experiencia internacional de más de 30 años en la
                  planeación, diseño, dirección, coordinación y construcción de
                  distintos proyectos lo posicionan como uno de los mejores
                  arquitectos en Latinoamérica.
                </motion.p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={3}
                  >
                    Ciudad Deportiva Real Madrid | Valdebebas, Madrid, España
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={4}
                  >
                    Museo de Arte Contemporáneo | León, Castilla y León, España
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={5}
                  >
                    Ciudad Financiera BSCH | Boadilla del Monte, Madrid, España
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={6}
                  >
                    Hotel Fuerte El Rompido | Huelva, Andalucía, España
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={7}
                  >
                    Hospital de Ciudad Real | Ciudad Real, Castilla la Mancha,
                    España
                  </motion.li>
                </ul>
              </div>
              <motion.div
                className="relative h-[220px] sm:h-[400px] md:h-[300px] lg:h-[500px] lg:w-[450px] xl:w-[600px] mt-6 md:mt-0"
                variants={
                  window.innerWidth < 768
                    ? fadeInAnimationVariantBottomToTop
                    : fadeInAnimationVariantRightToLeft
                }
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                <img
                  src={perfil2}
                  alt="Proyectos arquitectónicos"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          <section className="bg-gray-800 text-white py-8 sm:py-12 md:py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                variants={fadeInAnimationVariantBottomToTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                Diseño Acústico y Colaboraciones
              </motion.h2>
              <motion.p 
                className="mb-4 sm:mb-6 text-sm sm:text-base"
                variants={fadeInAnimationVariantBottomToTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={2}
              >
                Además de los diferentes proyectos arquitectónicos ya
                realizados, ha formado parte de otros, en los cuales aplicó su
                conocimiento en todo lo relacionado con diseño acústico, dando
                soporte en ingeniería y arquitectura en los proyectos que
                Malvicino Design Group ha realizado alrededor de todo el mundo.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base"
                variants={fadeInAnimationVariantBottomToTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={3}
              >
                Músicos de talla nacional e internacional producen su música en
                estudios de grabación, en donde él ha construido y se encargó de
                suministrar e instalar los elementos de acondicionamiento
                acústico que permiten producir música de la más alta calidad
                (Paneles, Ventanas, Puertas, Soffits, etc).
              </motion.p>
            </div>
          </section>
        </div>

        <div className="w-full h-full py-10 px-2 sm:px-6 md:px-28 lg:px-52 xl:px-[22rem] 2xl:px-[30rem] flex items-center justify-center">
          <TimeLine />
        </div>
      </div>
    );
  }
}









