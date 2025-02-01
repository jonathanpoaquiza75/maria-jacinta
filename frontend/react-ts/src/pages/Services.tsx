import '../styles/Services.css';

// Importa todas las imágenes desde la carpeta especificada
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, 
  import: 'default' // Esto evita la necesidad de acceder a .default manualmente
}) as Record<string, string>; // Asegura que TypeScript entienda que los valores son strings

const getImageUrl = (imagePath: string) => {
  return images[`../assets/images/${imagePath}`] || ''; // Devuelve la URL de la imagen o una cadena vacía si no se encuentra
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
          <div 
            className="service-item" 
            style={{ backgroundImage: `url(${getImageUrl('cabalgata.png')})` }}
          >
            <h3 className="service-title">Cabalgatas Guiadas</h3>
            <p className="service-description">
              Vive la experiencia de recorrer los hermosos paisajes de la isla a caballo con nuestros guías expertos.
            </p>
          </div>

          <div 
            className="service-item" 
            style={{ backgroundImage: `url(${getImageUrl('tirolesa2.jpg')})` }}
          >
            <h3 className="service-title">Aventura en Tirolesa</h3>
            <p className="service-description">
              Disfruta de una emocionante aventura deslizándote por las alturas y contemplando vistas espectaculares.
            </p>
          </div>

          <div 
            className="service-item" 
            style={{ backgroundImage: `url(${getImageUrl('familia2.jpg')})` }}
          >
            <h3 className="service-title">Actividades en Familia</h3>
            <p className="service-description">
              Disfruta de actividades para toda la familia en la cabaña, rodeados de naturaleza y tranquilidad.
            </p>
          </div>

          <div 
            className="service-item" 
            style={{ backgroundImage: `url(${getImageUrl('naturaleza2.jpg')})` }}
          >
            <h3 className="service-title">Conexión con la Naturaleza</h3>
            <p className="service-description">
              Relájate en nuestros espacios naturales y desconéctate del estrés mientras te sumerges en un ambiente único.
            </p>
          </div>

          <div 
            className="service-item" 
            style={{ backgroundImage: `url(${getImageUrl('familia.png')})` }}
          >
            <h3 className="service-title">Organización de Eventos</h3>
            <p className="service-description">
              Organiza tu evento especial en un entorno natural y único. Ofrecemos todo lo necesario para hacer de tu evento un éxito.
            </p>
          </div>

          <div 
            className="service-item" 
            style={{ backgroundImage: `url(${getImageUrl('logo.png')})` }}
          >
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
