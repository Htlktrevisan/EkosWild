// src/components/RoteirosPage.js
import React from 'react';
import { FaTruck, FaCreditCard } from 'react-icons/fa';
import Contact from './Contact'; // Reutilizando o contato
import './RoteirosPage.css'; // CSS próprio para a página

// Importando as imagens dos roteiros
import roteiro1 from '../assets/roteiro1.jpeg';
import roteiro2 from '../assets/roteiro2.jpg';
import roteiro3 from '../assets/roteiro3.jpg';
import roteiro4 from '../assets/roteiro4.jpg';
import roteiro5 from '../assets/roteiro5.webp';
import roteiro6 from '../assets/roteiro6.webp';

// Dados dos roteiros (facilita a manutenção)
const roteirosData = [
  {
    img: roteiro1,
    date: '(26/07)',
    title: 'Passeio em Pomerode e Blumenau – Zoo e Vila Germânica',
    price: 'R$ 192,96',
    installments: 'R$ 169,80 no Pix ou em 12x de R$ 16,08 sem juros'
  },
  {
    img: roteiro2,
    date: '(20/07)',
    title: 'Ecoparques de Canela – Sperry & Flor do Vale',
    price: 'R$ 228,96',
    installments: 'R$ 201,48 no Pix ou em 12x de R$ 19,08 sem juros'
  },
  {
    img: roteiro3,
    date: '(19/07)',
    title: 'Parque Estadual do Cerrado e Parque Lago Azul',
    price: 'R$ 257,04',
    installments: 'R$ 226,20 no Pix ou em 12x de R$ 21,42 sem juros'
  },
  {
    img: roteiro4,
    date: '(18/07)',
    title: 'Parque das Aves e Cataratas do Iguaçu – Foz do Iguaçu',
    price: 'R$ 214,50',
    installments: 'R$ 189,00 no Pix ou em 12x de R$ 17,87 sem juros'
  },
  {
    img: roteiro5,
    date: '(25/07)',
    title: 'Trilha do Morro do Pai Inácio – Chapada Diamantina',
    price: 'R$ 243,80',
    installments: 'R$ 215,30 no Pix ou em 12x de R$ 20,31 sem juros'
  },
  {
    img: roteiro6,
    date: '(27/07)',
    title: 'Excursão para Praia do Rosa – Santa Catarina',
    price: 'R$ 199,90',
    installments: 'R$ 174,90 no Pix ou em 12x de R$ 16,65 sem juros'
  }
];

const RoteirosPage = () => {
  return (
    <div className="roteiros-page">
      {/* Seção Hero */}
      <div className="roteiros-hero"></div>
      <div className="info-bar">
        <div className="info-item">
          <FaTruck className="info-icon" />
          <div>
            <h4>Roteiros selecionados a dedo</h4>
            <p>Viaje, aproveite o dia e volte para casa no mesmo dia</p>
          </div>
        </div>
        <div className="info-item">
          <FaCreditCard className="info-icon" />
          <div>
            <h4>Pagamento flexível</h4>
            <p>Parcele sua compra em até 12x sem juros!</p>
          </div>
        </div>
      </div>

      {/* Seção da Grade de Roteiros */}
      <section className="section roteiros-grid-section">
        <div className="container">
          <div className="roteiros-grid">
            {roteirosData.map((roteiro, index) => (
              <div className="roteiro-card" key={index}>
                <img src={roteiro.img} alt={roteiro.title} className="roteiro-card-img" />
                <div className="roteiro-card-content">
                  <p className="roteiro-card-date">{roteiro.date} - {roteiro.title}</p>
                  <h3 className="roteiro-card-price">{roteiro.price}</h3>
                  <p className="roteiro-card-installments">{roteiro.installments}</p>
                  <button className="detail-button">Ver detalhe</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default RoteirosPage;