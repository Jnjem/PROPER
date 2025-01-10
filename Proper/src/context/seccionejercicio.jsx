import { FUNCIONMODAL } from '../components/FUNCIONMODAL'
import { Titulo } from '../components/titulos';
import GairaS from '../assets/img/GairaS.png';
import ELDSP from '../assets/img/ELDSP.png';
import ENY from '../assets/img/ENY.png';
import WPRO from '../assets/img/WPRO.png';
import PMS from '../assets/img/PMS.png';
import TECM from '../assets/img/TECM.png';
import NMS from '../assets/img/NMS.png';
import STS from '../assets/img/STS.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const proyectosData = [
  {
    nombre: "El Lugar de su Presencia",
    descripcion: "Construcción de los estudios de una comunidad cristiana en el norte de Bogotá. Desarrollo de construcción civil, aislamiento acústico, acondicionamiento acústico. Suministro e instalación de paneles.",
    pais: "Bogotá, Colombia",
    imagen: ELDSP,
    isCarousel: true
  },
  {
    nombre: "Gaira Studios",
    descripcion: "Construcción civil, aislamiento y acondicionamiento acústico de los estudios de grabación del reconocido artista Carlos Vives.",
    pais: "Bogotá, Colombia",
    imagen: GairaS,
    isCarousel: true
  },
  {
    nombre: "Estudio en New York",
    descripcion: "Estudio de grabación perteneciente a uno de los músicos de la legendaria banda de Bon Jovi. Suministro de elementos de Acondicionamiento Acústico: Paneles de Absorción, Paneles Difusores y Ceiling Clouds",
    pais: "New York, Estados Unidos",
    imagen: ENY
  },
  {
    nombre: "Westlake Pro",
    descripcion: "Demo Room del icónico proveedor de audio profesional. Con sede también en los Ángeles. Suministro de elementos de Acondicionamiento Acústico: Paneles de Abosrción, Ceiling Clouds y Paneles Acústicos Variables.",
    pais: "Nashville, Estados Unidos",
    imagen: WPRO,
    isCarousel: true
  },
  {
    nombre: "Progressive Metal Studios",
    descripcion: "Estudio de grabación dedicado exclusivamente a bandas de rock progresivo y metal. Suministro de elementos de Acondicionamiento Acústico: Paneles de Abosrción, Ceiling Clouds y Paneles Acústicos Variables.",
    pais: "New York, Estados Unidos",
    imagen: PMS
  },
  {
    nombre: "TEC Monterrey",
    descripcion: "Estudios de grabación del Instituto Tecnológico de Estudios Superiores de Monterrey, popularmente conocido como TEC de Monterrey. Suministro de elementos de Acondicionamiento Acústico: Paneles de Abosrción, Ceiling Clouds y Paneles Acústicos Variables.",
    pais: "Monterrey, México",
    imagen: TECM
  },
  {
    nombre: "Noise Match Studios",
    descripcion: "Uno de los estudios más reconocidos de la Florida USA, ubicado en el famoso Distrito de las Artes de Wynwood de Miami, donde se dan cita artistas y empresas mundialmente conocidos. Suministro de elementos de Acondicionamiento Acústico: Paneles de Abosrción, Ceiling Clouds y Paneles Acústicos Variables.",
    pais: "Miami, Estados Unidos",
    imagen: NMS,
    isCarousel: true
  },
  {
    nombre: "Studio To Stage",
    descripcion: "Escuela de música y estudio de grabación que enseña todos los estilos musicales, ubicado en Englishtown, New Jersey. Suministro de elementos de Acondicionamiento Acústico: Paneles de Abosrción, Ceiling Clouds, Paneles Acústicos Variables, Puertas Acústicas y Ventanas Acústicas.",
    pais: "New Jersey, Estados Unidos",
    imagen: STS,
    isCarousel: true
  }
];

export default function SeccionProyectos() {

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
      <Titulo>PROYECTOS</Titulo>
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
