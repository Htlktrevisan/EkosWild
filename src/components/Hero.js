import React from 'react';
import './Hero.css';
import aboutImage from '../assets/hero-bg.jpg'; // Imagem do 'Sobre nós'

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <div className="hero-background"></div>
      <div id="sobre" className="about-us-content container">
        <div className="about-us-image-container">
          <img src={aboutImage} alt="Grupo de aventureiros no topo da montanha" />
        </div>
        <div className="about-us-text-container">
          <h2>Sobre nós</h2>
          <p>
            A EkosWild é a escolha ideal para quem busca experiências imersivas em meio à natureza. Focada em ecoturismo, oferecemos roteiros inesquecíveis para cânions, trilhas, cachoeiras e parques nacionais, partindo de Porto Alegre e imediações da capital.
          </p>
          <p>
            A EkosWild está comprometida em proporcionar experiências únicas e seguras para todos os amantes da natureza e da aventura. Quer embarcar nessa jornada com a gente? Acesse nosso site e descubra os próximos destinos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;