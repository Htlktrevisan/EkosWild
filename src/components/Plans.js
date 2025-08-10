import React from 'react';
import './Plans.css';
import plan1 from '../assets/plans-bg.jpg';
import plan2 from '../assets/contact-bg.jpg';
import plan3 from '../assets/images (1).jpeg';

const plansData = [
  {
    img: plan1,
    title: 'Ekos Essencial',
    description: 'Se você está buscando uma experiência imersiva na natureza, mas sem precisar pernoitar, o Plano Ekos Essencial é a escolha ideal. Este pacote foi pensado para quem deseja explorar e vivenciar o contato com a natureza.'
  },
  {
    img: plan2,
    title: 'Ekos Pro',
    description: 'O Plano Ekos Pro é a escolha perfeita para quem deseja explorar a natureza de forma mais completa, ideal para aqueles que buscam experiências autênticas e ecológicas, ainda mantendo um forte vínculo com o ambiente natural.'
  },
  {
    img: plan3,
    title: 'Ekos Wild Deluxe',
    description: 'O Plano Ekos Wild Deluxe é a escolha para aqueles que buscam total dependência do meio natural. Este pacote é cuidadosamente pensado para oferecer o melhor em conforto, exclusividade e imersão na natureza.'
  }
];

const Plans = () => {
  return (
    <section id="planos" className="section">
        <div className="plans-hero-image">
            {/* A imagem da mulher na trilha fica aqui como fundo */}
        </div>
        <div className="plans-content">
            <h2 className="section-title">Planos</h2>
            <p className="section-subtitle">Veja alguns planos que vamos fazer para melhorar sua viagem</p>
            <div className="plans-container container">
                {plansData.map((plan, index) => (
                    <div className="plan-card" key={index}>
                        <div className="plan-card-image">
                            <img src={plan.img} alt={plan.title} />
                        </div>
                        <div className="plan-card-content">
                            <h3>{plan.title}</h3>
                            <p>{plan.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Plans;