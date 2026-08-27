import { useAdmin } from '../context/AdminContext';
import { FaUserShield, FaSignOutAlt } from 'react-icons/fa';

export default function AdminBanner() {
  const { isAdminMode, logout } = useAdmin();

  if (!isAdminMode) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-slate-900 border-b border-brand-green/30 text-white z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 text-xs select-none shadow-md">
      <div className="flex items-center space-x-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
        </span>
        <FaUserShield className="text-brand-green-light" size={14} />
        <span className="font-semibold tracking-wide">
          Modo Administrador Activo
        </span>
        <span className="hidden sm:inline text-slate-400">
          | Puede agregar, editar y eliminar propiedades o proyectos directamente
        </span>
      </div>

      <button
        onClick={logout}
        className="flex items-center space-x-1.5 px-3 py-1 bg-red-600/90 hover:bg-red-600 text-white font-bold rounded-md shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
      >
        <FaSignOutAlt size={12} />
        <span>Salir de Edición</span>
      </button>
    </div>
  );
}
