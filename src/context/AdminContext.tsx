import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Property, Project } from '../types';

interface AdminContextType {
  isAdminMode: boolean;
  properties: Property[];
  projects: Project[];
  login: (username: string, pass: string) => Promise<boolean>;
  logout: () => void;
  addProperty: (property: Omit<Property, 'id'>) => Promise<void>;
  updateProperty: (property: Property) => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
  addProject: (project: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState<boolean>(() => {
    return sessionStorage.getItem('adminMode') === 'true';
  });

  const [properties, setProperties] = useState<Property[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch initial data from Netlify serverless functions on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [propsRes, projsRes] = await Promise.all([
          fetch('/api/properties'),
          fetch('/api/projects'),
        ]);

        if (propsRes.ok) {
          const propsData = await propsRes.json();
          setProperties(propsData);
        } else {
          console.error('Error fetching properties:', propsRes.statusText);
        }

        if (projsRes.ok) {
          const projsData = await projsRes.json();
          setProjects(projsData);
        } else {
          console.error('Error fetching projects:', projsRes.statusText);
        }
      } catch (err) {
        console.error('Error loading initial data from Neon database:', err);
      }
    };

    fetchInitialData();
  }, []);

  const login = async (username: string, pass: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password: pass }),
      });

      if (response.ok) {
        setIsAdminMode(true);
        sessionStorage.setItem('adminMode', 'true');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAdminMode(false);
    sessionStorage.removeItem('adminMode');
  };

  // Property CRUD actions
  const addProperty = async (newProp: Omit<Property, 'id'>) => {
    try {
      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProp),
      });
      if (response.ok) {
        const result = await response.json();
        setProperties(prev => [{ ...newProp, id: result.id }, ...prev]);
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al guardar la propiedad.');
      }
    } catch (error) {
      console.error('Error adding property:', error);
      alert((error as Error).message);
    }
  };

  const updateProperty = async (updatedProp: Property) => {
    try {
      const response = await fetch('/api/properties', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProp),
      });
      if (response.ok) {
        setProperties(prev => prev.map(p => p.id === updatedProp.id ? updatedProp : p));
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al actualizar la propiedad.');
      }
    } catch (error) {
      console.error('Error updating property:', error);
      alert((error as Error).message);
    }
  };

  const deleteProperty = async (id: string) => {
    try {
      const response = await fetch(`/api/properties?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProperties(prev => prev.filter(p => p.id !== id));
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al eliminar la propiedad.');
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      alert((error as Error).message);
    }
  };

  // Project CRUD actions
  const addProject = async (newProj: Omit<Project, 'id'>) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProj),
      });
      if (response.ok) {
        const result = await response.json();
        setProjects(prev => [{ ...newProj, id: result.id }, ...prev]);
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al guardar el proyecto.');
      }
    } catch (error) {
      console.error('Error adding project:', error);
      alert((error as Error).message);
    }
  };

  const updateProject = async (updatedProj: Project) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProj),
      });
      if (response.ok) {
        setProjects(prev => prev.map(p => p.id === updatedProj.id ? updatedProj : p));
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al actualizar el proyecto.');
      }
    } catch (error) {
      console.error('Error updating project:', error);
      alert((error as Error).message);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProjects(prev => prev.filter(p => p.id !== id));
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al eliminar el proyecto.');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert((error as Error).message);
    }
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
        deleteProject,
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
