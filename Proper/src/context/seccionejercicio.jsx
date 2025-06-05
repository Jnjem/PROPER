
import { motion } from "framer-motion";
import { FUNCIONMODAL } from '../components/FUNCIONMODAL'
import { Titulo } from '../components/titulos';

import Nutrition from "../assets/img/NUTRICION.png";
import Hab from '../assets/img/Hab.png';
import Exer from '../assets/img/Exer.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const fadeInAnimationVariantBottomToTop = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const proyectosData = [
  {
    nombre: "Nutrition",
    descripcion: "Nutrition is a very important aspect which is going to help us to have our organs and what we no see in a healthy state, eating good is the maintenance for the body, bad maintenance, bad function of the body.",
    pais: "For what its inside",
    imagen: Nutrition,
    isCarousel: true
  },
  {
    nombre: "Exercise",
    descripcion: "Exercise is very important to stay active and not lose any kind of mobility. This useful tool would help us to prevent diseases such as obesity or hearth-related problems.",
    pais: "For what is outside",
    imagen: Exer,
    isCarousel: true
  },
  {
    nombre: "Habits",
    descripcion: "Habits are very important to make a routine. This routine would allow us to maintain not only what we eat but what we do, giving us the key of discipline and consistency",
    pais: "To maintain the outside and inside",
    imagen: Hab,
    isCarousel: true
  },
  
];

export default function seccionejercicio() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <Titulo>Our three main pillars</Titulo>
      <div className="hidden md:flex flex-wrap -mx-4"></div>
      <div>
      <motion.p
          className="text-lg text-white sm:text-xl md:text-2xl mt-[-0.75rem] mb-6 sm:mb-8 px-4 sm:px-6"
          variants={fadeInAnimationVariantBottomToTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2} 
        >
          Our three pillars guarantee that you have a healthy and a happy life, click below to know more about the three pillars.
        </motion.p>
      </div>
      <div className="hidden md:flex flex-wrap -mx-4">
        {proyectosData.map((proyecto, index) => (
          <FUNCIONMODAL
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            pais={proyecto.pais}
            imagen={proyecto.imagen}
            isCarousel={proyecto.isCarousel || false}
            
          />
        ))}
      </div>

      <div className="block md:hidden">
        <Slider {...settings}>
          {proyectosData.map((proyecto, index) => (
            <div key={index}>
              <FUNCIONMODAL
                nombre={proyecto.nombre}
                descripcion={proyecto.descripcion}
                pais={proyecto.pais}
                imagen={proyecto.imagen}
                allowModal={false}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
