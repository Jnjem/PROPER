import { FUNCIONMODAL } from "../Components/FUNCIONMODAL";
import { Titulo } from "../Components/titulos";
import Bsch from "../assets/img/bsch.png";
import ColiseoImage from "../assets/img/coliseo.png";
import Rm from "../assets/img/rm.png";
import Musac from "../assets/img/musac.png";
import Rompido from "../assets/img/rompido.png";
import Real from "../assets/img/real.png";
import Pc from "../assets/img/pc.png";
import Emperatriz from "../assets/img/emperatriz.png";
import Wtc from "../assets/img/wtc.png";
import Covap from "../assets/img/covap.png";
import Gaira from "../assets/img/gaira.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/products/ProductCard";
import Vid1 from "../Videos/Video1.mp4"

// Simular la carga del JSON
const proyectosData = [
  {
    nombre: "Coliseo Live (Medplus)",
    descripcion: "El Coliseo Live actualmente Coliseo Medplus, es el mayor escenario para conciertos del país, cuenta con una capacidad mas de 20.000 personas. Esta obra se realizó en la calle 80 a las afueras de Bogotá D.C., ubicado en el municipio de Cota (Cundinamarca) en la Autopista Bogotá - La Vega, cuenta con 50.000 metros cuadrados de construcción y su costo es de aproximadamente $100 millones de dólares y cuenta con un total de más de 2.000 plazas de parqueo.  ",
    pais: "Cota/Cundinamarca, Colombia",
    video : Vid1
  },
  {
    nombre: "Ciudad Financiera BSCH",
    descripcion: "La Ciudad Financiera (Banco Santander Central Hispano), entró en funcionamiento en 2004. Es una de las mejores sedes corporativas del mundo, tanto en dimensiones como por sus exigencias operativas. Esta ciudad empresarial ocupa una supericie de 250 hectáreas y cuenta con nueve edificios de oficinas, todos dotados con los mayores adelantos en comunicaciones internas. También tiene dos contros de proceso de datos, un centro de formación, una residencia hostelera para empleados, escuela infantil, grandes instalaciones deportivas y comerciales, entre otras.",
    pais: "Boadilla del Monte/Madrid, España",
    imagen: Bsch
  },
  {
    nombre: "Ciudad Deportiva Real Madrid",
    descripcion: "Es el conjunto de instalaciones deportivas propiedad del Real Madrid Club de Fútbol, ubicado entre el recinto ferial Iferma y el Aeropuerto de Madrid-Barajas, actualmente es la ciudad deportiva con más superficie del mundo. Fue inaugurado el 30 de septiembre de 2005, con una superficie de 1 200 000 m², incluye las instalaciones médicas y de entrenamiento para el primer equipo y las secciones de la cantera, así como 12 campos de juego, incluyendo el Estadio Alfredo Di Stéfano donde juega el equipo filial, el Real Madrid Castilla.",
    pais: "Valdebebas/Madrid, España",
    imagen: Rm
  },
  {
    nombre: "Museo de Arte Contemporaneo MUSAC",
    descripcion:'Creado con el propósito de ser un "Museo del Presente" o "Museo del siglo XXI", abierto al público en el año 2005, tiene su sede en un edificio de nueva planta, obra del estudio madrileño Mansilla+Tuñón Arquitectos, que ha merecido un gran reconocimiento internacional recibiendo del Premio Mies van der Rohe de Arquitectura Contemporánea de la Unión Europea. La superficie de las cinco salas de exposiciones del museo es de 3.400 metros cuadrados. A ellas hay que Laan sumar los 180 metros cuadrados de la sala de proyecciones y los 450 del vestibulo de entrada.',
    pais: "León/Castilla y León, España",
    imagen: Musac
  },
  {
    nombre: "Hotel Fuerte el Rompido",
    descripcion: "Hotel ecológico de 4 estrellas de estilo Andaluz perteneciente a la cadena Fuerte Group Hotels, cuenta con 289 habitaciones completamente dotadas, y ofrece servicios como spa & wellness, 5 piscinas, gimnasio, parqueadero y restaurantes.",
    pais: "Huelva/Andalucía, España",
    imagen: Rompido
  },
  {
    nombre: "Hospital de Ciudad Real",
    descripcion: "Cuenta con una superficie construida de 96.000 m², está estructurado en cuatro zonas diferenciadas: 1) central o de hospitalización, con 7 plantas; 2) zona de apoyo residencial, que se reparte en dos plantas, una dedicada exclusivamente al servicio de Urgencias: 3) zona destinada a administración y gestión, y 4) almacenes. Además, dispone de un helipuerto para las urgencias. Entre otros servicios ofrece 559 camas. 129 salas de consultas, 12 quirófanos, 21 puestos en la Unidad de Cuidados Intensivos.",
    pais: "Ciudad Real/Castilla la Mancha, España",
    imagen: Real
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
      <Titulo>PROYECTOS</Titulo>
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
