import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ectomorphImg from "../assets/img/ectomorph.jpg";
import mesomorphImg from "../assets/img/mesomorph.jpg";
import endomorphImg from "../assets/img/endomorph.jpg";

const bodyTypes = [
  {
    name: "Ectomorph",
    description:
      "Ectomorphs are typically lean and struggle to gain weight or muscle. If you're aiming to build muscle mass, you need a caloric surplus—consume more calories than you burn. Focus on protein-rich foods and eat frequently throughout the day.",
    calories: "Consume more calories than you burn (caloric surplus).",
    protein: "Aim for a high-protein intake to support muscle growth.",
    image: ectomorphImg,
  },
  {
    name: "Mesomorph",
    description:
      "Mesomorphs have a naturally athletic build and respond quickly to exercise. If you want to stay lean while building muscle, you should aim for a balanced diet with moderate calories and protein intake.",
    calories: "Maintain or slightly increase your caloric intake.",
    protein: "Moderate to high protein to maintain and build muscle.",
    image: mesomorphImg,
  },
  {
    name: "Endomorph",
    description:
      "Endomorphs tend to gain fat easily and may find it hard to lose weight. To reduce body fat, consume fewer calories than you burn and prioritize lean proteins with high satiety.",
    calories: "Consume fewer calories than you burn (caloric deficit).",
    protein: "High protein intake helps preserve muscle during weight loss.",
    image: endomorphImg,
  },
];

const Goals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2
        className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-8"
        data-aos="fade-up"
      >
        Set Your Fitness Goal
      </h2>
      <p
        className="text-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Each body type responds differently to diet and exercise. Understanding your body type can help you determine how many calories and how much protein you should be consuming.
      </p>

      <div className="space-y-20 max-w-5xl mx-auto">
        {bodyTypes.map((type, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Imagen local */}
            <div className="w-full md:w-1/2 h-64">
              <img
                src={type.image}
                alt={type.name}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Contenido */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-500 mb-4">{type.name}</h3>
              <p className="text-gray-800 mb-4">{type.description}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  <strong>Calories:</strong> {type.calories}
                </li>
                <li>
                  <strong>Protein:</strong> {type.protein}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;

