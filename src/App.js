// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importando nossos componentes e páginas
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SobreNosPage from './components/SobreNosPage';
import RoteirosPage from './components/RoteirosPage'; // 1. IMPORTE A NOVA PÁGINA

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nos" element={<SobreNosPage />} />
            {/* 2. ADICIONE A NOVA ROTA AQUI */}
            <Route path="/roteiros" element={<RoteirosPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;