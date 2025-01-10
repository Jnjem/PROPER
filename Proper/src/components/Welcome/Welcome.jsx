import React from "react";
import { motion } from "framer-motion";

// Variantes de animación
const fadeInAnimationVariantBottomToTop = {
  initial: { 
    opacity: 0, 
    y: 50 
  },
  animate: (index = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3 * (index + 0.5),
    },
  }),
};

const Welcome = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        src="/Videos/Video1.mp4" // Ruta desde la carpeta public
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem]"
          variants={fadeInAnimationVariantBottomToTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2} // Personaliza el índice de animación
        >
          Welcome to wellness
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-[-0.75rem] mb-6 sm:mb-8 px-4 sm:px-6"
          variants={fadeInAnimationVariantBottomToTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2} // Personaliza el índice de animación
        >
          Wellness is a website desing to improve every aspect of your life. In wellness, we have three main pillar, Exercise, Nutrition and Habits. Come and inmerse yourself in this amazing journey!
        </motion.p>
      </div>

      {/* Capa de oscurecimiento (opcional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />
    </div>
  );
};

export default Welcome;
