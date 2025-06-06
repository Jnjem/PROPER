import React from "react";
import { motion } from "framer-motion";

const muscleGroups = [
  {
    name: "Chest",
    size: "Large",
    description: "Includes the pectoralis major and minor, responsible for pushing movements.",
    image: "https://images.squarespace-cdn.com/content/v1/5602c3cce4b0f8716df3f66d/1631612501949-YSP59WCRJWMOBD89FP6C/Chest+Muscles.jpg?format=2500w"
  },
  {
    name: "Back",
    size: "Large",
    description: "Includes latissimus dorsi, trapezius, and rhomboids. Vital for pulling motions.",
    image: "https://img.freepik.com/free-photo/human-body_1048-5346.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Legs",
    size: "Large",
    description: "Composed of quadriceps, hamstrings, glutes, and calves. Supports all lower-body movements.",
    image: "https://img.freepik.com/premium-vector/leg-muscle_1308-14707.jpg"
  },
  {
    name: "Shoulders",
    size: "Medium",
    description: "Composed mainly of deltoids. Responsible for shoulder rotation and lifting movements.",
    image: "https://www.corewalking.com/wp-content/uploads/2013/11/shoulder-muscles.jpg"
  },
  {
    name: "Arms",
    size: "Small",
    description: "Includes biceps and triceps, supporting pushing and pulling movements.",
    image: "https://www.drlox.com/images/stories/images/upper-arm-muscles.jpg"
  },
  {
    name: "Core",
    size: "Medium",
    description: "Includes abdominal muscles and obliques. Supports posture, balance, and stability.",
    image: "https://corehealthcare.com.au/wp-content/uploads/2019/12/coreset.jpg"
  }
];

const Group = () => {
  return (
    <div className="bg-black text-white py-10 px-5 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">Types of Muscles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {muscleGroups.map((muscle, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={muscle.image}
              alt={muscle.name}
              className="w-full h-60 object-contain mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2">{muscle.name}</h3>
            <p className="text-sm italic mb-1">Size: {muscle.size}</p>
            <p className="text-base">{muscle.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Group;
