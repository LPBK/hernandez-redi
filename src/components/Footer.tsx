import { GiRotaryPhone } from 'react-icons/gi';
import { FaFacebookF, FaTiktok, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-brand-blue-light">

          {/* Logo and About Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Hernández Inmuebles logo"
                className="h-16 w-16 rounded-full border-2 border-white shadow-md bg-white"
              />
              <div className="flex flex-col font-extrabold tracking-wider uppercase text-sm leading-tight">
                <span>INMOBILIARIA DEL ATLANTICO </span>
                <span className="text-brand-green-light text-xs font-semibold normal-case">
                  LAS TERRENAS
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed pt-2">
              Soluciones integrales de primer nivel en servicios legales, inmobiliarios y de arquitectura en la Costa Atlántica de la República Dominicana.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-3">
              <a href="https://www.facebook.com/profile.php?id=61593762608842" target="_blank" rel="noopener noreferrer" className="h-9 w-9 flex items-center justify-center rounded-full bg-brand-blue-light hover:bg-brand-green transition-colors duration-200 text-gray-200 hover:text-white" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.instagram.com/inmobiliariadelatalantico/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 flex items-center justify-center rounded-full bg-brand-blue-light hover:bg-brand-green transition-colors duration-200 text-gray-200 hover:text-white" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.tiktok.com/@inmobiliaria.del94?lang=es-419" target="_blank" rel="noopener noreferrer" className="h-9 w-9 flex items-center justify-center rounded-full bg-brand-blue-light hover:bg-brand-green transition-colors duration-200 text-gray-200 hover:text-white" aria-label="TikTok">
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Location and Address Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-brand-green-light font-bold text-lg tracking-wider uppercase border-b border-brand-blue-light pb-2">
              Nuestra Oficina
            </h3>
            <div className="flex items-start space-x-3 text-sm text-gray-300">
              <FaMapMarkerAlt className="text-brand-green-light mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="font-semibold text-white">Calle Juan Pablo Duarte #60</p>
                <p>Centro de la Ciudad, Las Terrenas</p>
                <p>Samaná, República Dominicana</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <img
                src="/rd.png"
                alt="Bandera de la República Dominicana"
                className="h-10 w-14 rounded shadow object-cover border border-brand-blue-light"
              />
              <span className="text-xs text-gray-400">Orgullosamente sirviendo en Samaná</span>
            </div>
          </div>

          {/* Contact Details and Hours */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-brand-green-light font-bold text-lg tracking-wider uppercase border-b border-brand-blue-light pb-2">
              Contacto y Horario
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <GiRotaryPhone className="text-brand-green-light" size={20} />
                <span>(829) 770-9011</span>
              </div>
              <div className="flex items-center space-x-3">
                <GiRotaryPhone className="text-brand-green-light" size={20} />
                <span>(809) 913-9331</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-brand-green-light" size={18} />
                <span>inmobiliariadelatalantico@gmail.com</span>
              </div>
              <div className="pt-2 border-t border-brand-blue-light/50">
                <p className="font-semibold text-white">Horario de Atención:</p>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-gray-400">
          <p>
            <span
              onClick={(e) => {
                if (e.detail === 3) {
                  window.dispatchEvent(new Event('open-admin-login'));
                }
              }}
              className="select-none cursor-default"
            >
              &copy;
            </span>{" "}
            2026 Hernández Inmuebles &amp; Asociados. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
