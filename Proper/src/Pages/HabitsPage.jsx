import React from 'react'
import { Carousel } from "../components/carousel/carousel.jsx";
import Whathabit from "../components/Whathabit.jsx"
const images = [
  { src: "https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Habits', titulo: 'The power of habits', descripcion: 'This section is to know' },
  { src: "https://images.unsplash.com/photo-1458419948946-19fb2cc296af?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Wh', titulo: 'What is a habit', },
  { src: "https://images.unsplash.com/photo-1644412448696-3836c24bda5d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Ud', titulo: 'Understanding the importance of habits',},
  { src: "https://images.unsplash.com/photo-1645887583922-b1902f09696e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: 'Ho', titulo: 'How to apply them',},
];
export default function Habits() {
  return (
    <>
    <div className='bg-[url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")] bg-blend-darken bg-black bg-opacity-80 h-full bg-cover'></div>
    <div className="h-[89vh] w-full">
                    <Carousel images={images} />
                </div> 
      <div/>
      <div><Whathabit></Whathabit> </div>
    </>
  )
}
