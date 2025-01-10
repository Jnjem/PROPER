import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logow from "../assets/img/Logow.png";

const sections = [
  {
    img: Logow,
    items: [
      "There's a trident between Nutrition, Habits and exercise. If you controll the 3 of them, you will be complete.",
    ],
  },

  {
    title: "Navegation",
    items: [
      { name: "Home", link: "/" },
      { name: "Exercise", link: "/Acustica" },
      { name: "Nutrition", link: "/Empresa" },
      { name: "Habits", link: "/ContactMe" },
    
    ],
  },

  {
    title: "Contacto",
    items: [
      "WhatsApp: +57 3165363352",
      "Facebook: Javier Martinez",
      "Correo: gerencia@javieremartinez.co",
      "Oficina: Calle 160 Nº 73-47 int 4-502 Bogotá D.C. - Colombia",
    ],
  },
];


const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white py-y px-">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6  py-8">
          {sections.map((section, index) => (
            <div key={index} className="col-span-2 px-3">
              {section.title && (
                <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              )}
              {section.img && (
                <img src={section.img} alt={section.title} className="w-2/5" />
              )}
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className={`py-1 ${
                      typeof item !== "string"
                        ? "hover:text-gray-600 cursor-pointer"
                        : ""
                    }`}
                  >
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <a href={item.link}>{item.name}</a>
                    )}
                  </li>
                ))}
              </ul>
              {section.img === Logow && (
                <div className="flex space-x-4 pt-4">
                  
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white flex flex-col w-full mx-auto justify-center sm:flex-row text-center text-gray-700">
          <p className="py-4">
            © Copyright 2024. Designed and Developed by Juan Jose Martinez
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
