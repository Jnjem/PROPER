import React from 'react';
import FUNCIONMODAL from '../context/seccionejercicio.jsx'
import { Carousel } from "../components/carousel/carousel";
import Welcome from "../components/Welcome/Welcome.jsx"

const images = [
    { src: "https://images.unsplash.com/photo-1487499648633-2ade40e0f769?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'coliseo', titulo: 'Welcome to Wellness', descripcion: 'where you improve your wellbeing' },
    { src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'real', titulo: 'Exercise', descripcion: 'Be stronger ' },
    { src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'rompido', titulo: 'Nutrition', descripcion: 'Be healthier' },
    { src: "https://images.unsplash.com/photo-1429117237875-aa29229d99f0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'rm', titulo: 'Habits', descripcion: 'Be better' },
  ];

const HomePage = () => {
    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")] bg-blend-darken bg-black bg-opacity-80 h-full bg-cover'>
            <div className="h-[89vh] w-full">
                <Carousel images={images} />
            </div>
            <div> <Welcome /> </div>
           
            <div className="w-[90%] mx-auto text-center p-1 mt-4">
                <FUNCIONMODAL />
            </div>
        </div>
    );
};

export default HomePage;