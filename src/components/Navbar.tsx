import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios Jurídicos', path: '/juridico' },
    { name: 'Bienes Raíces', path: '/inmobiliaria' },
    { name: 'Arquitectura', path: '/arquitectura' },
    { name: 'Contáctanos', path: '/contactanos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-blue shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.jpg"
              alt="Hernández Inmuebles logo"
              className="h-16 w-16 rounded-full shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col text-white font-extrabold tracking-wide uppercase leading-tight text-sm md:text-base">
              <span>INMOBILIARIA DEL ATLANTICO </span>
              <span className="text-brand-green-light text-xs font-semibold normal-case">
                 LAS TERRENAS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-brand-green text-white shadow'
                    : 'text-gray-200 hover:bg-brand-blue-light hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-brand-blue-light focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-brand-blue-dark border-t border-brand-blue-light">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'bg-brand-green text-white'
                  : 'text-gray-200 hover:bg-brand-blue-light hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
