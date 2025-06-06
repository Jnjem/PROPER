import React from "react";
import { Carousel } from "../components/carousel/carousel";
import FUNCIONMODAL from "../Context/Seccionnutricion.jsx";
import Routine from "../components/Routines.jsx";
import ProteinCalculator from "@/components/Calculadoradeproeinas";
import Benefits from "@/components/Benefitsexercise";
import Goals from "@/components/goals.jsx";
import Group from "../components/Group.jsx";
import Proteinpor from "@/components/Proteinpor.jsx";

const images = [
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Exercise", titulo: 'Your exercise journey', descripcion: 'In this section you would find:' },
  { src: "https://images.unsplash.com/photo-1620862657760-72a639a2daef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Beo", titulo: 'Benefits of exercise', descripcion: '' },
  { src: "https://images.unsplash.com/photo-1551984427-6d77a1918093?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Dyg", titulo: 'Defining your goal', descripcion: '' },
  { src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "R", titulo: 'Routines', descripcion: '' },
];

const ExercisePage = () => {
  return (
    <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5fe7b6498dc8ae15a0364652/1619582669616-9JCEW1ILXSDVI1OFSXFB/FY9A1390-1800x1200.jpg")] bg-blend-darken bg-black bg-opacity-80 h-full bg-cover'>
      <div className="h-[89vh] w-full">
        <Carousel images={images} />
      </div>
      <div><Benefits></Benefits> </div>
      <div> <Goals></Goals> </div>
       <div> <Group></Group></div>
       <dvi> <Proteinpor></Proteinpor></dvi>
      <div> <ProteinCalculator /></div>
      <div> <Routine></Routine> </div>
      <div className="mx-auto text-center p-1"></div>
      <div className="w-[90%] mx-auto text-center p-1 mt-4">
        <FUNCIONMODAL />
      </div>
    </div>
  );
};

export default ExercisePage;

