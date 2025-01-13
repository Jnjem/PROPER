import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import Exercise from "./Pages/Exercisepage";
import Nutrition from "./Pages/NutritionPage";
import Habits from "./Pages/HabitsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white w-full">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Acustica" element={<Exercise />} />
          <Route path="/Contactme" element={<Habits />} />
          <Route path="/Empresa" element={<Nutrition />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;