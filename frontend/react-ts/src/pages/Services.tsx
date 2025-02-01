import React from 'react';
import '../styles/Services.css';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});

const getImageUrl = (imagePath: string) => {
  const image = images[imagePath];
  if (image) {
    return image.default; // Asegúrate de acceder al path correcto
  }
  return ''; // Si la imagen no está definida, devuelve una cadena vacía
};

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-description">
          Descubre nuestra variedad de servicios diseñados para ofrecerte experiencias únicas y memorables en la isla.
        </p>
        
        <div className="services-list">
          <div className="service-item" style={{ backgroundImage: `url(${getImageUrl('../assets/images/cabalgata.png')})` }}>
            <h3 className="service-title">Cabalgatas Guiadas</h3>
            <p className="service-description">
              Vive la experiencia de recorrer los hermosos paisajes de la isla a caballo con nuestros guías expertos.
            </p>
          </div>

          <div className="service-item" style={{ backgroundImage: `url(${getImageUrl('../assets/images/tirolesa2.jpg')})` }}>
            <h3 className="service-title">Aventura en Tirolesa</h3>
            <p className="service-description">
              Disfruta de una emocionante aventura deslizándote por las alturas y contemplando vistas espectaculares.
            </p>
          </div>

          <div className="service-item" style={{ backgroundImage: `url(${getImageUrl('../assets/images/familia2.jpg')})` }}>
            <h3 className="service-title">Actividades en Familia</h3>
            <p className="service-description">
              Disfruta de actividades para toda la familia en la cabaña, rodeados de naturaleza y tranquilidad.
            </p>
          </div>

          <div className="service-item" style={{ backgroundImage: `url(${getImageUrl('../assets/images/naturaleza2.jpg')})` }}>
            <h3 className="service-title">Conexión con la Naturaleza</h3>
            <p className="service-description">
              Relájate en nuestros espacios naturales y desconéctate del estrés mientras te sumerges en un ambiente único.
            </p>
          </div>

          <div className="service-item" style={{ backgroundImage: `url(${getImageUrl('../assets/images/familia.png')})` }}>
            <h3 className="service-title">Organización de Eventos</h3>
            <p className="service-description">
              Organiza tu evento especial en un entorno natural y único. Ofrecemos todo lo necesario para hacer de tu evento un éxito.
            </p>
          </div>

          <div className="service-item" style={{ backgroundImage: `url(${getImageUrl('../assets/images/logo.png')})` }}>
            <h3 className="service-title">Venta de Productos Lácteos</h3>
            <p className="service-description">
              Disfruta de productos lácteos frescos y naturales, como quesos, yogures y más, directamente de la isla a tu mesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
