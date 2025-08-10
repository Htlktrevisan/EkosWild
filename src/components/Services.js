import React from 'react';
import './Services.css';
import service1 from '../assets/f738264ab0741c82.avif';
import service2 from '../assets/caminhando-pessoas-mulher-caminhava-na-trilha-de-montanhas-desfrutando-vista-usando-mochila-e-roupas-caminhada-em-azul-bonito-276850375.webp';
import service3 from '../assets/DPq_YYJVoAAbAgy.jpeg';

const servicesData = [
  {
    img: service1,
    title: 'Excursões de Bate e Volta',
    description: 'Essas excursões são planejadas para otimizar o tempo e proporcionar uma imersão total, sem a necessidade de se ausentar por dias.'
  },
  {
    img: service2,
    title: 'Viagens Pedagógicas',
    description: 'Essas viagens pedagógicas são organizadas para combinar aprendizado e diversão de forma prática e envolvente, proporcionando uma experiência.'
  },
  {
    img: service3,
    title: 'Suporte Completo para Viagens',
    description: 'Oferecemos suporte completo para viagens, garantindo tranquilidade do início ao fim. Desde o planejamento até o retorno.'
  }
];

const Services = () => {
  return (
    <section className="section">
        <h2 className="section-title">Nossos Principais serviços</h2>
        <p className="section-subtitle">A Ekoswild está comprometida em proporcionar experiências únicas e seguras para todos os amantes da natureza e da aventura.</p>
        <div className="services-container container">
            {servicesData.map((service, index) => (
                <div className="service-card" key={index}>
                    <div className="service-card-image">
                        <img src={service.img} alt={service.title} />
                    </div>
                    <div className="service-card-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Services;