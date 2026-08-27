import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Juridico from './components/Juridico';
import Inmobiliaria from './components/Inmobiliaria';
import Arquitectura from './components/Arquitectura';
import Contactanos from './components/Contactanos';
import { AdminProvider, useAdmin } from './context/AdminContext';
import AdminBanner from './components/AdminBanner';
import LoginModal from './components/LoginModal';

function AppContent() {
  const { isAdminMode } = useAdmin();

  return (
    <div className={`flex flex-col min-h-screen bg-[#F8FAFC] transition-all duration-300 ${isAdminMode ? 'pt-10' : ''}`}>
      <AdminBanner />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/juridico" element={<Juridico />} />
          <Route path="/inmobiliaria" element={<Inmobiliaria />} />
          <Route path="/arquitectura" element={<Arquitectura />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </main>
      <LoginModal />
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <Router>
        <AppContent />
      </Router>
    </AdminProvider>
  );
}

export default App;
