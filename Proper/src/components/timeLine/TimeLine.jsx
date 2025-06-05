import React from "react";
import { motion } from 'framer-motion';

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

export const TimeLine = () => {
  return (
    <div className="-my-6">
      
      {/* Item #1 */}
      <motion.div 
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={fadeInAnimationVariantBottomToTop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={1}
      >
        {/* Purple label */}
        <div className="font-caveat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-0">
          Gaira Studios (Carlos Vives)
        </div>
        {/* Vertical line, Date, Title, Circle marker */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-indigo-100 rounded-full">
            2016
          </time>
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500">
            Bogotá-Colombia
          </div>
        </div>
        {/* Content */}
        <div className="text-slate-400">
          Construcción civil, aislamiento y acondicionamiento acústico de los
          estudios de grabación que pertenecen al reconocido artista latino
          Carlos Vives.
        </div>
      </motion.div>

      {/* <!-- Item #2 --> */}
      <motion.div 
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={fadeInAnimationVariantBottomToTop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={2}
      >
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-0">
          El Lugar de Su Presencia Studios
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-indigo-100 rounded-full">
            2017
          </time>
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500">
            Bogotá-Colombia
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-400">
          Construcción de los estudios de una comunidad cristiana en el norte de
          Bogotá. Desarrollo de construcción civil, aislamiento acústico,
          acondicionamiento acústico. Suministro e instalación de paneles.
        </div>
      </motion.div>

      {/* <!-- Item #3 --> */}
      <motion.div 
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={fadeInAnimationVariantBottomToTop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={3}
      >
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-0">
          Studio to Stage Academy
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-indigo-100 rounded-full">
            2018
          </time>
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500">
            New Jersey-USA
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-400">
          Suministro de elementos de acondicionamiento acústico: Paneles de
          absorción, Ceiling Clouds, Paneles acústicos variables, Puertas
          acústicas y Ventanas acústicas
        </div>
      </motion.div>

      {/* <!-- Item #4 --> */}
      <motion.div 
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={fadeInAnimationVariantBottomToTop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={4}
      >
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-0">
          Nukutepipi Studios
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-indigo-100 rounded-full">
            2019
          </time>
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500">
            Polinesia Francesa
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-400">
          Suministro de accondicionamiento acústico, Clouds, Ceiling Panels, Puertas acústicas y Paneles acústicos.
        </div>
      </motion.div>

      {/* <!-- Item #5 --> */}
      <motion.div 
      className="relative  py-6 pl-8 sm:pl-32 group"
      variants={fadeInAnimationVariantBottomToTop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={5}
      >
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-0">
          Coliseo Live Bogotá (Coliseo Medplus)
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-indigo-100 rounded-full">
            2020
          </time>
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500">
            Bogotá-Colombia
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-400">
          Dirección de diseños y dirección de obra.
        </div>
      </motion.div>

      {/* <!-- Item #6 --> */}
      <motion.div 
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={fadeInAnimationVariantBottomToTop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={6}
      >
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-0">
          Sony Flagship Studios
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-indigo-100 rounded-full">
            2023
          </time>
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-500">
            Madrid-España
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-400">
          Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
          Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
          risus.
        </div>
      </motion.div>
    </div>
  );
};
