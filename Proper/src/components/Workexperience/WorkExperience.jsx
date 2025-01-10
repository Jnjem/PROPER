import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: { 
      opacity: 0,
      x: 50
  },
  animate: (index = number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3 * (index + 1),
    }
  }),
};

const stats = [
    { title: "Proyectos Realizados", value: "65+" },
    { title: "Años de Experiencia", value: "30+" },
    { title: "Clientes satisfechos", value: "+" },
];

export default function WorkExperience() {

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100">
      {/* Left Section - Image */}
      <motion.div 
      className=" w-full flex justify-center h-4/5"
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      >
        <img 
          src="https://png.pngtree.com/png-vector/20240806/ourmid/pngtree-d-front-side-closeup-of-stylish-white-house-on-transparent-background-png-image_13399387.png"
          alt="House"
          className="object-cover w-full h-full md:max-w-xl"
        />
      </motion.div>

      {/* Right Section - Stats */}
      <div className="md:w-1/3 w-full flex flex-col items-center text-center space-y-6 p-6 md:mr-6">
        {stats.map((stat, index) => (
          <motion.div 
          key={index} 
          className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded-lg w-60 h-30 py-10 md:py-12 duration-150"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={ index }
          >
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="mt-2">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
}