import React from "react";
import CoverflowSwiper from "../components/coverflowSwiper/coverflowSwiper";
import { Carousel } from "../components/carousel/carousel";
import FUNCIONMODAL from "../Context/Seccionnutricion";

import ELDSP from "../assets/img/ELDSP.png";
import WPRO from "../assets/img/WPRO.png";
import PMS from "../assets/img/PMS.png";
import NMS from "../assets/img/NMS.png";

const images = [
  { src: "https://www.malvicinodg.com/img/projects/10/439.jpg", alt: "El Lugar De Su Presencia", titulo: 'EL LUGAR DE SU PRESENCIA', descripcion: 'Bogota, Colombia' },
  { src: "https://www.malvicinodg.com/img/projects/50/392.jpg", alt: "Westlake PRO", titulo: 'WESTLAKE PRO', descripcion: 'Nashville, US' },
  { src: "https://www.malvicinodg.com/img/projects/25/406.jpg", alt: "Progressive Metal Studio", titulo: 'PROGRESSIVE METAL STUDIO', descripcion: 'New York, US' },
  { src: "https://www.malvicinodg.com/img/projects/20/655.jpg", alt: "Noise Match Studios", titulo: 'NOISE MATCH STUDIO', descripcion: 'Miami, US' },
];

const AcusticaPage = () => {
  return (
    <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5fe7b6498dc8ae15a0364652/1619582669616-9JCEW1ILXSDVI1OFSXFB/FY9A1390-1800x1200.jpg")] bg-blend-darken bg-black bg-opacity-80 h-full bg-cover'>
      <div className="h-[89vh] w-full">
        <Carousel images={images} />
      </div>
      <div className="mx-auto text-center p-1"></div>
      <div className="w-[90%] mx-auto text-center p-1 mt-4">
        <FUNCIONMODAL />
      </div>
    </div>
  );
};

export default AcusticaPage;
