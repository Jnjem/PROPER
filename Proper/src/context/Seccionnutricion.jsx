import { FUNCIONMODAL } from "../Components/FUNCIONMODAL";
import { Titulo } from "../Components/titulos";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vid1 from "../assets/Videos/Vid1.mp4";
import vide1 from "../assets/Videos/vide1.mp4";
import vid2 from "../assets/Videos/vid2.mp4";
import vid3 from "../assets/Videos/vid3.mp4";
import vid4 from "../assets/Videos/vid4.mp4";
import vid5 from "../assets/Videos/vid5.mp4";
import vid6 from "../assets/Videos/vid6.mp4";

// Simular la carga del JSON
const proyectosData = [
  {
    nombre: "Chest and tricep",
    descripcion: ".  ",
    pais: "",
    video : vide1
  },
  {
    nombre: "Bicep and back",
    descripcion: ".  ",
    pais: "",
    video : vid2
  },
  {
    nombre: "Legs",
    descripcion: ".  ",
    pais: "",
    video : vid3
  },
  {
    nombre: "Fullbody",
    descripcion: ".  ",
    pais: "",
    video : vid4
  },
  {
    nombre: "Routine at home",
    descripcion: ".  ",
    pais: "",
    video : vid5
  },
  {
    nombre: "Cardio HIIT",
    descripcion: ".  ",
    pais: "",
    video : vid6
  },
  
];

export default function Seccionnutricion() {
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
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Titulo>Routines</Titulo>
      <div className="hidden md:flex flex-wrap -mx-4">
        {proyectosData.map((proyecto, index) => (
          <FUNCIONMODAL
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            pais={proyecto.pais}
            imagen={proyecto.imagen}
            video={proyecto.video}
            
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
                video={proyecto.video}
                allowModal={false}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
