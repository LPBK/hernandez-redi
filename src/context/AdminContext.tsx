import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Property, Project } from '../types';

interface AdminContextType {
  isAdminMode: boolean;
  properties: Property[];
  projects: Project[];
  login: (username: string, pass: string) => boolean;
  logout: () => void;
  addProperty: (property: Omit<Property, 'id'>) => void;
  updateProperty: (property: Property) => void;
  deleteProperty: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const DEFAULT_PROPERTIES: Property[] = [
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

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Villa Mariposa',
    location: 'Las Terrenas, Samaná',
    image: '/Gemini_Generated_Image_lqh65mlqh65mlqh6.jpg'
  },
  {
    id: 'proj-2',
    title: 'Luxury Hotel & Suites',
    location: 'Las Terrenas, Samaná',
    image: '/Gemini_Generated_Image_qr3cm5qr3cm5qr3c.jpg'
  },
  {
    id: 'proj-3',
    title: 'Community Desarrollo',
    location: 'Las Terrenas, Samaná',
    image: '/samana.png'
  },
  {
    id: 'proj-4',
    title: 'Proyecto Restauración',
    location: 'Las Terrenas, Samaná',
    image: '/corte.png'
  }
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState<boolean>(() => {
    return sessionStorage.getItem('adminMode') === 'true';
  });

  const [properties, setProperties] = useState<Property[]>(() => {
    const saved = localStorage.getItem('properties');
    return saved ? JSON.parse(saved) : DEFAULT_PROPERTIES;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
  });

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const login = (username: string, pass: string): boolean => {
    // Standard secure defaults check
    if (username.toLowerCase() === 'admin' && pass === 'hernandez2026') {
      setIsAdminMode(true);
      sessionStorage.setItem('adminMode', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdminMode(false);
    sessionStorage.removeItem('adminMode');
  };

  // Property CRUD actions
  const addProperty = (newProp: Omit<Property, 'id'>) => {
    const id = `prop-${Date.now()}`;
    setProperties(prev => [...prev, { ...newProp, id }]);
  };

  const updateProperty = (updatedProp: Property) => {
    setProperties(prev => prev.map(p => p.id === updatedProp.id ? updatedProp : p));
  };

  const deleteProperty = (id: string) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  // Project CRUD actions
  const addProject = (newProj: Omit<Project, 'id'>) => {
    const id = `proj-${Date.now()}`;
    setProjects(prev => [...prev, { ...newProj, id }]);
  };

  const updateProject = (updatedProj: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProj.id ? updatedProj : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AdminContext.Provider
      value={{
        isAdminMode,
        properties,
        projects,
        login,
        logout,
        addProperty,
        updateProperty,
        deleteProperty,
        addProject,
        updateProject,
        deleteProject
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
