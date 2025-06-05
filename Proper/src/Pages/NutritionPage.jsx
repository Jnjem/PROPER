import React, { Component } from 'react';
import { motion } from 'framer-motion';
import FoodCalculator from '../components/calculadora.jsx';
import { Carousel } from "../components/carousel/carousel.jsx";
import Banner1 from "../assets/img/Banner1.jpg"
import Banner2 from "../assets/img/Banner2.jpg"
import Banner3 from "../assets/img/Banner3.jpg"
import GOF from "../components/Group of food.jsx"
import St from "../assets/img/NUTRITION/St.jpg"
import Wha from "../assets/img/NUTRITION/Wha.jpg"
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

const images = [
    { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Nutrition', titulo: 'How to improve your nutrition', descripcion: 'This section would cover the funddaments of', },
    { src: [Wha], alt: 'Wha', titulo: 'What I need to eat',},
    { src: "https://images.unsplash.com/photo-1523901839036-a3030662f220?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Mf', titulo: 'Measuring food',},
    { src: [St], alt: 'St', titulo: 'Stablishing a diet',},
  ];


export default class Nutrition extends Component {
  render() {
    return (
      <div className='  bg-gray-100'>
            <div className="h-[89vh] w-full">
                <Carousel images={images} />
            </div>
        
        <div className="bg-gray-100 w-full ">
          <section
            style={{
              backgroundImage: ` url(${Banner1})`,
            }}
            className="relative h-[50vh] md:h-[60vh] lg:h-[90vh] bg-no-repeat bg-center bg-cover flex items-center justify-center opacity-90"
          >
            <div className="absolute inset-10 bg-black bg-opacity-5" />
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
                  What I need to eat?
                </motion.h1>
                <motion.div
                  className="flex items-center justify-center mb-2 sm:mb-4"
                  variants={fadeInAnimationVariantBottomToTop}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                >
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-4"
                  variants={fadeInAnimationVariantBottomToTop}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                >
                  We need to start with the basic, what are the nutrients that our body needs?
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
                  5 Different food groups.
                </motion.h2>
              <ol className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={3}
                  >
                  Animal-derived products(Dairy and proteins)
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={4}
                  >
                     Grains
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={5}
                  >
                    Fruits
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={6}
                  >
                    Vegetables
                  </motion.li>
                  <motion.li
                    variants={fadeInAnimationVariantLeftToRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={7}
                  >
                    Legumes
                  </motion.li>
                </ol>
                <motion.p
                  className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base"
                  variants={fadeInAnimationVariantLeftToRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                >
                  We need to balance the five categories to have a balanced and
                  powerful meal. The OMS recommend to separate you plate into 3 parts. 1 part is going to be for the Grains.
                  The second part for fruits and Vegetables and the last part for the Legumes and Animald-derived products
                </motion.p>
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
                  src={Banner2}
                  alt="Proyectos arquitectónicos"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          <div> <GOF /></div>

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
                Measuring food
              </motion.h2>
              <motion.p 
                className="mb-4 sm:mb-6 text-sm sm:text-base"
                variants={fadeInAnimationVariantBottomToTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={2}
              >
                Sometimes measuring food might be tedious because you don't know where to start.
                The first thing that we are searching when "measuring food" is the calories, which is the 
                Amount of energie that an aliment give to you. If this energy is not used, it would storaged,
                generating fat. Having many energy storaged would produce obesity and other severe problems.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base"
                variants={fadeInAnimationVariantBottomToTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={3}
              >
                The other thing that we are searching to measure is the amount of nutrients the Aliment give to us,
                in this case we put the proteins to grow muscle, sugars and saturated fat, the last one two too see 
                how healthy is the food that we are measuring. Use the food calculator to check the amount of calories, proteins,
                sugars and saturated fat of each aliment and start making your own meals!.
              </motion.p>
            </div>
          </section>
          <div> <FoodCalculator  /> </div>
        </div>
        <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white shadow-lg rounded-lg p-6 md:p-8">
    {/* Imagen a la izquierda */}
    <motion.div
      className="relative h-[220px] sm:h-[400px] md:h-[300px] lg:h-[500px] lg:w-full"
      variants={
        window.innerWidth < 768
          ? fadeInAnimationVariantBottomToTop
          : fadeInAnimationVariantLeftToRight
      }
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={1}
    >
      <img
        src={Banner3}
        alt="Proyectos arquitectónicos"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </motion.div>

    {/* Texto a la derecha */}
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800"
        variants={fadeInAnimationVariantRightToLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
      >
        Stablishing a diet
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-6 text-sm sm:text-base"
        variants={fadeInAnimationVariantRightToLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={2}
      >
    When we are stablishing a diet, is very important to know what is our objective, to win weight, to loose weight
    or to win muscle. Depending on our goal, we would have to follow a "rule". This "rule" would help us to achieve faster
    the goal, without having an abusive diet that doesn't allow us to eat anything.
      </motion.p>
      <motion.p
        className="text-gray-700 mt-6 text-sm sm:text-base"
        variants={fadeInAnimationVariantRightToLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={2}
      >
        If you want to win weight, you need to eat more food that you are burning, this mean that the amount of calories that 
        you eat need to be superior than the amount of calories you burn. For this, make your breakfast, lunch and dinner in the 
        food calculator. Then, if you do exercise, you could check how much calories you burn. Then substract the last to values 
        and wih the food calculator, add to your plan food that have more calories until reaching a point in which you eating 250 to 500
        calories more than the value that you obtain at the substraction. This is known as a superavit caloric. To loose weight, you neee
        to do a caloric deficit. Is the as superavit but instead you just need to eat between 250 to 500 less calories than the calories
        that you are eating right know. To win muscle you need to eat food with high contents of protein, for this, use the protein intake
        calculator found in the exercise section.
      </motion.p>
    </div>
  </div>
</section>
      </div>
    );
  }
}









