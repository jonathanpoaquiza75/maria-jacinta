import React from 'react';
import '../styles/AboutUs.css';
// Importación de imágenes
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-description">
          En La Isla María Jacinta nos dedicamos a ofrecer experiencias únicas que conectan a nuestros visitantes con la naturaleza.  
          Desde emocionantes cabalgatas hasta aventuras en tirolesa, nuestro objetivo es brindarte momentos inolvidables en un entorno natural espectacular. Además, ofrecemos productos lácteos de toda índole, como yogures, quesos frescos y otros productos naturales, ideales para quienes buscan lo mejor de la naturaleza en su mesa.
        </p>
        
        <div className="team-section">
          <h3 className="team-title">Conoce a Nuestro Equipo</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={(images['../assets/images/persona1.png'] as { default: string }).default} alt="Francisco Basantes" className="team-image" />
              <h4 className="team-member-name">Francisco Basantes</h4>
              <p className="team-member-role">Fundador y Director General</p>
              <p className="team-member-description">
                Apasionado por la naturaleza y la aventura, Francisco lidera la isla con el objetivo de ofrecer experiencias únicas que conecten a los visitantes con el entorno natural. 
              </p>
            </div>
            <div className="team-member">
              <img src={(images['../assets/images/persona2.png'] as { default: string }).default} alt="Delia Poaquiza" className="team-image" />
              <h4 className="team-member-name">Delia Poaquiza</h4>
              <p className="team-member-role">Co-fundadora y Directora de Experiencias</p>
              <p className="team-member-description">
                Delia es la encargada de crear experiencias inolvidables para nuestros turistas, garantizando la seguridad y el disfrute en todas las actividades que ofrecemos en la isla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
