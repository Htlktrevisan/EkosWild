// src/components/SobreNosPage.js
import React from 'react';
import Contact from './Contact'; // Vamos reutilizar o componente de contato!
import './SobreNosPage.css'; // Um CSS só para esta página

const SobreNosPage = () => {
  return (
    <div className="sobre-nos-page">
      {/* 1. Seção Hero da página Sobre Nós */}
      <div className="about-hero">
        <div className="about-hero-title-container">
          <h1>Sobre nós</h1>
        </div>
      </div>

      {/* 2. Conteúdo principal da página */}
      <div className="about-content-section section">
        <div className="container">
          <p>
            A EkosWild é a escolha ideal para quem busca experiências incríveis em meio à natureza. Especializada em excursões de bate e volta, oferecemos roteiros inesquecíveis para cânions, trilhas, cachoeiras e parques nacionais, partindo de Porto Alegre, Florianópolis e Curitiba. Além disso, também realizamos saídas de campo para turmas de colégios, proporcionando aprendizado e aventura em destinos estaduais e interestaduais.
          </p>
          <p>
            Nossos serviços são pensados não apenas para aqueles com alta capacidade de performance e esforço físico, mas para o público em geral, de todas as idades, que busca aproveitar o seu dia de folga, sair da rotina e, acima de tudo, se divertir!
          </p>
          <p>
            A EkosWild está comprometida em proporcionar experiências únicas e seguras para todos os amantes da natureza e da aventura. Quer embarcar nessa jornada com a gente? Acesse nosso site e descubra os próximos destinos!
          </p>
        </div>
      </div>

      {/* 3. Seção de Contato reutilizada */}
      <Contact />
    </div>
  );
};

export default SobreNosPage;