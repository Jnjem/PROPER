import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoJavierMartinez from "../assets/img/Logo_Javier_Martinez.png";

const sections = [
  {
    img: LogoJavierMartinez,
    items: [
      "Theres a trident between nutrition, Habits and exercise. If you controll the 3 of them, you will be complete.",
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

const socialItems = [
  {
    name: "Linkedin",

    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/javier-enrique-martínez-silva-81406456/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "#",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.link/oqox2p",
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
              {section.img === LogoJavierMartinez && (
                <div className="flex space-x-4 pt-4">
                  {socialItems.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400 bg-red-600 p-2 rounded-full font-bold
                      "
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
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
