import React from 'react';
import { motion } from 'framer-motion';

const benefitsData = [
  {
    title: 'Boosts Muscular Strength and Endurance',
    text: 'Engaging in regular resistance training not only builds muscle but also increases endurance. This helps improve posture, mobility, and prevents injuries in everyday activities and sports.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800',
  },
  {
    title: 'Enhances Mental Health and Reduces Stress',
    text: 'Physical activity releases endorphins—your brain’s feel-good neurotransmitters—reducing anxiety, depression, and boosting your overall mood and mental clarity.',
    img: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Improves Cardiovascular Health',
    text: 'Aerobic exercise like running, cycling, or swimming strengthens your heart and lungs, lowers blood pressure, and improves circulation, greatly reducing the risk of heart disease.',
    img: 'https://images.unsplash.com/photo-1623134915837-d2fdb4f59035?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Supports Weight Management',
    text: 'Consistent physical activity helps burn calories and increase metabolic rate. It plays a vital role in maintaining a healthy weight or achieving weight loss goals.',
    img: 'https://images.unsplash.com/photo-1611077544695-c7942e060c4d?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Boosts Energy and Improves Sleep',
    text: 'Exercise increases overall energy levels and improves sleep quality by helping regulate your internal body clock and reducing insomnia symptoms.',
    img: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Benefits = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-20 text-white"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       {/* Darker overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 text-center mb-8">
          Why Exercise Matters
        </h2>
        <p className="text-lg md:text-xl text-center text-white mb-16">
          Exercise plays a crucial role in maintaining a healthy body and mind. Here are five powerful reasons to make it part of your lifestyle:
        </p>

        <div className="space-y-20">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10`}
            >
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="md:w-1/2">
                <h3 className="text-green-400 text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white text-base md:text-lg">{benefit.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;



