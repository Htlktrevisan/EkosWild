// src/components/Navbar.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo2.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* O logo agora também é um link para a Home */}
          <Link to="/">
            <img src={logo} alt="EkosWild Logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            {/* Link para a Página Inicial */}
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            {/* Link para a página Sobre Nós */}
            <Link to="/sobre-nos" className="nav-links">Sobre nós</Link>
          </li>
          <li className="nav-item">
            {/* Link para a página de Roteiros */}
            <Link to="/roteiros" className="nav-links">Roteiros</Link>
          </li>
        </ul>
        <div className="nav-socials">
          {/* O link do Instagram continua sendo um <a> normal porque leva para um site externo */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;