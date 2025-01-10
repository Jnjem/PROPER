import React, { useState } from "react";
import { useToast } from "../toast/ToastService.jsx";
import { AlertCircle } from "react-feather";
import axios from "axios";
import logo from "../../assets/img/Logo_Javier_Martinez.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const isFormComplete =
      Object.values(formData).every((value) => value !== "");
    setIsFormValid(isFormComplete);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      setIsLoading(true);
      try{
        const response = await axios.post(
          "http://127.0.0.1:8000/users/sendEmail/",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        if (response.status === 200){
          handleSuccess();
          setIsFormSent(true);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            telefono: "",
            mensaje: "",
          });
        }

      }catch (error) {
        handleFail();
        console.error(error);
      }finally {
        setIsLoading(false);
      }
    }
    else {
      handleFail()
    }
  };

  const toast = useToast();

  const handleFail = () => {
    const id = toast.open(
      <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
        <AlertCircle size={40}/>
        <div>
          <h3 className="font-bold">
            Acción fallida
          </h3>
          <p className="text-sm">
            Revisa que la información sea correcta
          </p>
        </div>
      </div>,
      10000
    )
    toast.close(id);
  }

  const handleSuccess = () => {
    const id = toast.open(
      <div className="flex gap-2 bg-green-300 text-green-800 p-4 rounded-lg shadow-lg">
        <AlertCircle size={40}/>
        <div>
          <h3 className="font-bold">
            Acción Exitosa
          </h3>
          <p className="text-sm">
            Estaremos contactándote próximamente
          </p>
        </div>
      </div>,
      10000
    )
    toast.close(id);
  }

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-6 bg-no-repeat bg-cover bg-center">
            <img src={logo} alt="Javier Martín" className="object-cover w-full"/>
          </div>
          <div className="w-full lg:w-3/5 py-8 px-6 lg:px-12">
            <h2  className="text-3xl mb-4 text-white">Formulario de Contacto</h2>
            <p className="mb-4 text-white italic">
              Estas a un paso crecer con nosotros!
            </p>
            {isLoading && (
              <div className="text-center text-white mb-4">
                <p>Cargando...</p>
              </div>
            )}
            <form onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(event);
            }}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Nombres</label>
                    <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} className="py-1 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombres" required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Apellidos</label>
                    <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} className="py-1 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apellidos" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-2">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Email</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} className="py-1 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div>
                    <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Telefono</label>
                    <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className="py-1 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefono" required />
                </div>
              </div>
              <div className="mt-2">
                <label htmlFor="mensaje" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Mensaje</label>
                <textarea type="text" id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} className="resize-none py-1 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20" required/>
              </div>
              <div className="mt-4">
                <input type="checkbox" className="border border-gray-400 mr-1" required/>
                <span className="text-white text-xs">
                  Acepto el uso de la información suministrada a través de este formulario y autorizo el envío de correos electrónicos para contactarme.
                </span>
              </div>
              <div className="mt-2">
                <button type="submit" className="w-full bg-gray-500 py-3 text-center text-white">Contactar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


