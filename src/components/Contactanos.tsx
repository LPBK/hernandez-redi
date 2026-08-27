import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookMessenger } from 'react-icons/fa';
import Footer from './Footer';

export default function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    sujeto: 'Consulta General',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Contacto enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', sujeto: 'Consulta General', mensaje: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Redesigned Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-100 space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold text-brand-blue tracking-tight">
                  Contáctanos
                </h1>
                <p className="text-sm text-gray-500 font-light">
                  Envíenos un mensaje y nos pondremos en contacto con usted a la brevedad posible.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 bg-brand-green/10 border border-brand-green/30 text-brand-green rounded-xl text-center font-bold text-sm transition-all duration-300">
                  ¡Mensaje enviado con éxito! Nos comunicaremos con usted pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="nombre" className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-green transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ej. juan@correo.com"
                        className="px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-green transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="sujeto" className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Asunto de Consulta
                    </label>
                    <select
                      name="sujeto"
                      id="sujeto"
                      value={formData.sujeto}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-green transition-colors duration-200"
                    >
                      <option value="Consulta General">Consulta General</option>
                      <option value="Servicios Inmobiliarios">Bienes Raíces / Inmobiliaria</option>
                      <option value="Servicios Jurídicos">Servicios Jurídicos y Legales</option>
                      <option value="Servicios de Arquitectura">Arquitectura y Diseño</option>
                      <option value="Soporte Técnico">Soporte Técnico</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="mensaje" className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escriba aquí los detalles de su requerimiento..."
                      className="px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-green transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold tracking-wider text-sm rounded-lg shadow hover:shadow-lg transition-all duration-200 uppercase"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: "Hablemos Directamente" with Professional Contacts */}
            <div className="lg:col-span-5 space-y-8 flex flex-col">
              
              {/* Main Callout Box */}
              <div className="bg-brand-blue text-white rounded-2xl p-8 lg:p-10 shadow-xl space-y-6">
                <h2 className="text-2xl font-extrabold tracking-wide uppercase border-b border-brand-blue-light pb-4">
                  Hablemos Directamente
                </h2>
                
                {/* General Contacts */}
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-brand-green-light mt-1 flex-shrink-0" size={18} />
                    <span>Calle Juan Pablo Duarte #60, Centro de la Ciudad, Las Terrenas, RD.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-brand-green-light flex-shrink-0" size={16} />
                    <span>contacto@hernandezinmuebles.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-brand-green-light flex-shrink-0" size={16} />
                    <span>Lunes a Sábado: 9:00 AM a 6:00 PM</span>
                  </div>
                </div>

                {/* Direct Messengers bar */}
                <div className="flex gap-4 pt-4 border-t border-brand-blue-light/50 justify-center sm:justify-start">
                  <a
                    href="https://wa.me/qr/RIVKFTULUI6CP1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors shadow"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                  <a
                    href="mailto:contacto@hernandezinmuebles.com"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow"
                    title="Correo Electrónico"
                  >
                    <FaEnvelope size={22} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow"
                    title="Messenger"
                  >
                    <FaFacebookMessenger size={22} />
                  </a>
                </div>
              </div>

              {/* Profiles Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                {/* Francisco Card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="space-y-2">
                    <h3 className="font-bold text-brand-blue text-sm uppercase tracking-wide">
                      FRANCISCO HERNÁNDEZ
                    </h3>
                    <span className="text-[10px] bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded font-bold uppercase">
                      Abogado
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Prestigioso abogado especializado en derecho civil, penal y migratorio, ofreciendo asesoría y representación excepcional en Samaná.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/qr/RIVKFTULUI6CP1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full py-2.5 bg-brand-green hover:bg-brand-green-dark text-white rounded-lg text-xs font-bold transition-colors duration-200"
                  >
                    <FaWhatsapp size={16} />
                    <span>WhatsApp Francisco</span>
                  </a>
                </div>

                {/* Edita Card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="space-y-2">
                    <h3 className="font-bold text-brand-blue text-sm uppercase tracking-wide">
                      EDITA HERNÁNDEZ
                    </h3>
                    <span className="text-[10px] bg-brand-green/10 text-brand-green px-2 py-0.5 rounded font-bold uppercase">
                      Arquitecta
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Distinguida arquitecta reconocida por su excelencia en diseño y construcción, especializada en proyectos innovadores y funcionales.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/qr/U4I6VJZXS2GOO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full py-2.5 bg-brand-green hover:bg-brand-green-dark text-white rounded-lg text-xs font-bold transition-colors duration-200"
                  >
                    <FaWhatsapp size={16} />
                    <span>WhatsApp Edita</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
