import { FUNCIONMODAL } from "../Components/FUNCIONMODAL";
import { Titulo } from "../Components/titulos";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Vid1 from "../Videos/Video1.mp4"

// Simular la carga del JSON
const proyectosData = [
  {
    nombre: "Video 1",
    descripcion: ".  ",
    pais: "",
    video : Vid1
  },
  {
    nombre: "Video 2",
    descripcion: ".  ",
    pais: "",
    video : Vid1
  },
  {
    nombre: "Video 3",
    descripcion: ".  ",
    pais: "",
    video : Vid1
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
