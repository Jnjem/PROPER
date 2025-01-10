import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import logow from "../assets/img/Logow.png";


const Nav = () => {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setClick(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = (
    <div className="absolute  w-full left-0  bg-black transition-all duration-300 ease-in-out px-2 z-40">
      <ul className="flex flex-col items-start ">
        <Link className="w-full" to="/" onClick={() => setClick(false)}>
          <li className="pl-2 my-3 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded w-full text-left text-lg">
            Home
          </li>
        </Link>
        <Link className="w-full" to="/Acustica" onClick={() => setClick(false)}>
          <li className="pl-2 my-3 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded w-full text-left text-lg">
            Exercise
          </li>
        </Link>
        <Link className="w-full" to="/Empresa" onClick={() => setClick(false)}>
          <li className="pl-2 my-3 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded w-full text-left text-lg">
            Nutrition
          </li>
        </Link>
        
        <Link
          className="w-full"
          to="/ContactMe"
          onClick={() => setClick(false)}
        >
          <li className="pl-2 my-3 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded w-full text-left text-lg">
            Habits
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-black text-white w-full">
      <div className="flex items-center justify-between lg:py-5 px-5 lg:px-20 py-4 w-full">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logow}
            alt="Logo"
            className="h-14 w-auto -my-6"
          />
        </span>
        <div
          className={`flex-1 items-center justify-center font-normal ${
            isMobile ? "hidden" : "flex"
          }`}
        >
          <ul className="flex gap-8 text-[18px]">
            <Link to="/">
              <li className="hover:text-white transition border-b-2 border-black hover:border-white cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/Acustica">
              <li className="hover:text-white transition border-b-2 border-black hover:border-white cursor-pointer">
                Exercise
              </li>
            </Link>
           
            <Link to="/Empresa">
              <li className="hover:text-white transition border-b-2 border-black hover:border-white cursor-pointer">
                Nutrition
              </li>
            </Link>
            <Link to="/ContactMe">
              <li className="hover:text-white transition border-b-2 border-black hover:border-white cursor-pointer">
                Habits
              </li>
            </Link>
          </ul>
        </div>
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logow}
            alt="Logo"
            className="opacity-0 h-14 w-auto -my-6"
          />
        </span>
        {isMobile && (
          <button className="lg:hidden" onClick={handleClick}>
            {click ? <FaTimes size={24} /> : <CiMenuFries size={24} />}
          </button>
        )}
      </div>
      {click && content}
    </nav>
  );
};

export default Nav;