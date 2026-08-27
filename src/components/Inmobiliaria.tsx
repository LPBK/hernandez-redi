import { FaClipboardCheck, FaHome, FaTasks, FaKey, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import Carousel from './Carousel';
import Footer from './Footer';
import type { Property } from '../types';

export default function Inmobiliaria() {
  const services = [
    {
      title: 'Transferencias Inmobiliarias',
      icon: <FaClipboardCheck className="text-brand-green" size={24} />,
      items: [
        'Revisión Legal del Inmueble y deslinde.',
        'Redacción y Revisión de Contratos de Promesa y Compraventa.',
        'Gestión de Trámites Notariales y Registrales ante la Jurisdicción Inmobiliaria.',
        'Asesoría en Impuestos de transferencia inmobiliaria (3%) y Pagos Legales.',
        'Resolución de Conflictos, oposiciones y Litigios sobre derechos registrados.'
      ]
    },
    {
      title: 'Ventas de Inmuebles',
      icon: <FaHome className="text-brand-green" size={24} />,
      items: [
        'Promoción y venta de villas, apartamentos y terrenos en Samaná.',
        'Revisión legal rigurosa del inmueble antes de la puesta en venta.',
        'Redacción, firma y gestión de contratos notariales de compraventa.',
        'Asesoramiento integral al comprador y vendedor durante el cierre.',
        'Gestión de cobro y liquidación de impuestos del inmueble.'
      ]
    },
    {
      title: 'Administración de Propiedades',
      icon: <FaTasks className="text-brand-green" size={24} />,
      items: [
        'Gestión legal, administrativa y contractual de inquilinos.',
        'Cobranza y conciliación mensual de pagos de rentas y servicios.',
        'Mantenimiento preventivo y reparaciones de infraestructura.',
        'Gestión de conflictos, desalojos y recuperación de inmuebles.',
        'Administración y supervisión de propiedades en Régimen de Condominio.'
      ]
    },
    {
      title: 'Alquiler de Inmuebles',
      icon: <FaKey className="text-brand-green" size={24} />,
      items: [
        'Redacción, revisión y registro de contratos de arrendamiento.',
        'Asesoría en Derechos y Obligaciones de Arrendador y Arrendatario.',
        'Custodia y gestión de depósitos de garantía y cobro periódico.',
        'Renovaciones contractuales y reajustes tarifarios legales.',
        'Resolución rápida de disputas y desahucios administrativos.'
      ]
    }
  ];

  // Using the Property interface to structure featured listings from the mockups
  const properties: Property[] = [
    {
      id: 'prop-1',
      title: 'Villa Mariposa, Las Terrenas',
      description: 'Espectacular villa de lujo frente al mar. Cuenta con piscina infinita, amplios jardines y terminaciones de primera clase. Título deslindado.',
      price: 450000,
      currency: 'USD',
      location: 'Boulevard del Atlántico, Las Terrenas, Samaná',
      bedrooms: 4,
      bathrooms: 4.5,
      area: 1267,
      type: 'venta',
      category: 'casa',
      images: [
        'https://d2p0bx8wfdkjkb.cloudfront.net/static/properties/SAN6Z4F8KS/RBNWOPMOGL/QhAoTSMSAd/6.jpg',
        'https://www.cataloniahotels.com/es/blog/wp-content/uploads/2024/01/tipos-habitaciones-hotel.jpg'
      ],
      featured: true
    },
    {
      id: 'prop-2',
      title: 'Apartamento de Lujo, Portillo',
      description: 'Lujoso apartamento con vista panorámica a la bahía de Samaná. Amueblado con estilo caribeño, acceso directo a la playa y seguridad 24/7.',
      price: 450000,
      currency: 'USD',
      location: 'El Portillo, Las Terrenas, Samaná',
      bedrooms: 3,
      bathrooms: 3,
      area: 210,
      type: 'venta',
      category: 'apartamento',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyotzhRzt7Koj6n79-56O0btxAChv227mYQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQY6UByZ_xbhvq5yg_cJKTAanytRroU03u2Q&s'
      ],
      featured: true
    },
    {
      id: 'prop-3',
      title: 'Lote Residencial Exclusivo',
      description: 'Excelente terreno plano listo para construcción en zona de alto desarrollo. Servicios de agua y luz instalados, a pocos minutos de la playa.',
      price: 200000,
      currency: 'USD',
      location: 'Cosón, Las Terrenas, Samaná',
      bedrooms: 0,
      bathrooms: 0,
      area: 2200,
      type: 'venta',
      category: 'terreno',
      images: [
        '/samana.png'
      ],
      featured: true
    },
    {
      id: 'prop-4',
      title: 'Villa Vista Hermosa',
      description: 'Hermosa propiedad de diseño moderno rodeada de naturaleza. Terraza espaciosa, piscina privada y excelente oportunidad de inversión vacacional.',
      price: 250000,
      currency: 'USD',
      location: 'Loma de Sánchez, Las Terrenas, Samaná',
      bedrooms: 3,
      bathrooms: 2.5,
      area: 180,
      type: 'venta',
      category: 'casa',
      images: [
        'https://d2p0bx8wfdkjkb.cloudfront.net/static/properties/SAN6Z4F8KS/RBNWOPMOGL/QhAoTSMSAd/6.jpg'
      ],
      featured: true
    }
    
  ];

  return (
    <>
      {/* Banner */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-green/20 text-brand-green-light rounded-full text-xs font-semibold uppercase tracking-wider">
            <FaHome size={12} />
            <span>Asesoría Inmobiliaria y Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Servicios Inmobiliarios y Gestión
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
            Encuentre y gestione la propiedad perfecta en el Caribe. Le asistimos en todos los trámites legales y de administración de bienes raíces.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-blue">
              ¿Cómo le podemos ayudar?
            </h2>
            <p className="text-gray-500 font-light">
              Nuestros servicios cubren todos los aspectos legales, transaccionales y de mantenimiento de sus propiedades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green mt-2 mr-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-blue">
              Propiedades Destacadas
            </h2>
            <p className="text-gray-500 font-light">
              Explore algunas de nuestras propiedades exclusivas disponibles para venta y alquiler en Las Terrenas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((prop) => (
              <div key={prop.id} className="bg-[#F8FAFC] rounded-2xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col group h-full">
                
                {/* Carousel wrapper */}
                <div className="relative">
                  <Carousel slides={prop.images} />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-brand-green text-white text-xs font-bold uppercase rounded-full tracking-wide shadow-md z-10">
                    En {prop.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider">
                      {prop.category}
                    </span>
                    <h3 className="text-base font-bold text-brand-blue line-clamp-1 group-hover:text-brand-green transition-colors duration-200">
                      {prop.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed flex-grow">
                    {prop.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center justify-between text-xs text-gray-600 border-y border-slate-200/50 py-3">
                    {prop.bedrooms > 0 && (
                      <div className="flex items-center space-x-1" title="Habitaciones">
                        <FaBed className="text-slate-400" />
                        <span>{prop.bedrooms} Hab</span>
                      </div>
                    )}
                    {prop.bathrooms > 0 && (
                      <div className="flex items-center space-x-1" title="Baños">
                        <FaBath className="text-slate-400" />
                        <span>{prop.bathrooms} Baños</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1" title="Área">
                      <FaRulerCombined className="text-slate-400" />
                      <span>{prop.area} m²</span>
                    </div>
                  </div>

                  {/* Location info */}
                  <div className="flex items-center space-x-1.5 text-xs text-gray-500">
                    <FaMapMarkerAlt className="text-brand-green flex-shrink-0" size={13} />
                    <span className="line-clamp-1">{prop.location}</span>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-extrabold text-brand-blue">
                      {prop.currency === 'USD' ? '$' : 'RD$'}
                      {prop.price.toLocaleString()} {prop.currency}
                    </span>
                    <button className="px-3.5 py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-colors duration-200 shadow-sm">
                      Ver Detalles
                    </button>
                  </div>

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
