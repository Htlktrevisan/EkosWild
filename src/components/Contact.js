import React from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaPhone, FaRegClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container container">
        <div className="contact-info-panel">
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>EkosWild@gmail.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Telefone</h4>
              <p>(48) 98765-4321</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaRegClock className="contact-icon" />
            <div>
              <h4>Horário</h4>
              <p>Segunda a sexta - 9h às 18h</p>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <h3>Fale Conosco</h3>
          <form>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Seu nome" required />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Seu email" required />
            </div>
            <div className="input-group">
              <FaPhone className="input-icon" />
              <input type="tel" placeholder="Seu telefone" required />
            </div>
            <button type="submit" className="submit-btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;