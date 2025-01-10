import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import AcusticaPage from "./Pages/Acustica";
import Empresa from "./Pages/Empresa";
import ContactMe from "./Pages/ContactMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white w-full">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Acustica" element={<AcusticaPage />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Empresa" element={<Empresa />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;