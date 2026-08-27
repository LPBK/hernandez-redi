import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Juridico from './components/Juridico';
import Inmobiliaria from './components/Inmobiliaria';
import Arquitectura from './components/Arquitectura';
import Contactanos from './components/Contactanos';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
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
      </div>
    </Router>
  );
}

export default App;
