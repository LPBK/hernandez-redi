import { FaDraftingCompass, FaHardHat, FaSearch, FaCalculator, FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';

interface Project {
  title: string;
  location: string;
  image: string;
}

export default function Arquitectura() {
  const services = [
    {
      title: 'DISEÑO',
      icon: <FaDraftingCompass size={22} />,
      items: [
        'Diseños arquitectónicos residenciales y comerciales.',
        'Diseño de lotificaciones y urbanizaciones.',
        'Planos arquitectónicos detallados y modelado 3D.',
        'Anteproyectos y presentaciones de diseño.'
      ]
    },
    {
      title: 'CONSTRUCCIÓN',
      icon: <FaHardHat size={22} />,
      items: [
        'Construcción general de villas, apartamentos y locales.',
        'Remodelaciones y ampliación de espacios.',
        'Reformas y adecuaciones de interiores y exteriores.',
        'Mano de obra calificada y control de materiales.'
      ]
    },
    {
      title: 'SUPERVISIÓN',
      icon: <FaSearch size={22} />,
      items: [
        'Supervisión técnica e inspección de obras en proceso.',
        'Dirección y coordinación general del proyecto.',
        'Medición de obra y control de cronograma.',
        'Garantía de calidad y cumplimiento de planos.'
      ]
    },
    {
      title: 'TASACIONES',
      icon: <FaCalculator size={22} />,
      items: [
        'Tasaciones inmobiliarias y avalúos comerciales.',
        'Estimación y presupuestos de construcción.',
        'Valoraciones catastrales para gestiones fiscales.',
        'Obtención de Licencias de Construcción y permisos gubernamentales.'
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: 'Villa Mariposa',
      location: 'Las Terrenas, Samaná',
      image: '/Gemini_Generated_Image_lqh65mlqh65mlqh6.jpg'
    },
    {
      title: 'Luxury Hotel & Suites',
      location: 'Las Terrenas, Samaná',
      image: '/Gemini_Generated_Image_qr3cm5qr3cm5qr3c.jpg'
    },
    {
      title: 'Community Desarrollo',
      location: 'Las Terrenas, Samaná',
      image: '/samana.png'
    },
    {
      title: 'Proyecto Restauración',
      location: 'Las Terrenas, Samaná',
      image: '/corte.png'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-green/20 text-brand-green-light rounded-full text-xs font-semibold uppercase tracking-wider">
            <FaDraftingCompass size={12} />
            <span>Arquitectura y Construcción</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Estudio de Arquitectura y Construcción
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
            De la idea al plano, del plano a la obra. Ofrecemos soluciones arquitectónicas innovadoras y dirección técnica profesional en Las Terrenas.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with accent overlay */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-green to-brand-blue rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
                <img
                  src="/arquitectura.png"
                  alt="Diseño arquitectónico plano y lápiz"
                  className="w-full h-auto rounded-xl object-cover hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: List of Main Architectural Services */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold text-brand-blue">
                Servicios de Arquitectura y Urbanismo
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Acompañamos a nuestros clientes en cada etapa del desarrollo. Desde la concepción preliminar de ideas, diseño detallado de lotificaciones, levantamientos en terreno, modelado 3D, hasta la obtención de licencias de obra.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-brand-green flex-shrink-0" size={16} />
                  <span>DISEÑOS ARQUITECTÓNICOS</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-brand-green flex-shrink-0" size={16} />
                  <span>CONSTRUCCIÓN DE VILLAS</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-brand-green flex-shrink-0" size={16} />
                  <span>DISEÑO DE LOTIFICACIONES</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-brand-green flex-shrink-0" size={16} />
                  <span>SUPERVISIÓN DE PROYECTOS</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-brand-green flex-shrink-0" size={16} />
                  <span>LEVANTAMIENTOS DE INMUEBLES</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-brand-green flex-shrink-0" size={16} />
                  <span>TASACIONES INMOBILIARIAS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rebuilt Portfolio Grid matching Mockup */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-blue uppercase tracking-wide">
              Portafolio de Arquitectura y Construcción
            </h2>
            <p className="text-gray-500 font-light">
              Nuestros cuatro pilares y galerías de proyectos destacados.
            </p>
          </div>

          {/* Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {services.map((srv, index) => (
              <div key={index} className="bg-slate-50 border border-slate-100 p-6 rounded-xl flex flex-col space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-green text-white">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-brand-blue tracking-wide">
                  {srv.title}
                </h3>
                <ul className="space-y-2 flex-grow">
                  {srv.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-600 leading-relaxed flex items-start">
                      <span className="h-1 w-1 rounded-full bg-brand-green mt-1.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Project Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md h-64 bg-slate-200">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 text-white space-y-0.5">
                  <h4 className="text-sm font-bold tracking-wide uppercase">
                    {proj.title}
                  </h4>
                  <p className="text-[10px] text-brand-green-light">
                    {proj.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
