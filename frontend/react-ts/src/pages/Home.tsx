import { Carousel, Button } from 'react-bootstrap';
import '../styles/Home.css';
import promo1 from '../assets/videos/promo1.mp4';

// Importación de imágenes
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});

const Home = () => {
  return (
    <div>
      <div className="welcome-section">
        <h1 className="display-3 font-weight-bold">Bienvenido a La Isla María Jacinta 🌿🏇</h1>
        <h2>Turismo y Naturaleza</h2>
        <p className="mt-4 lead">
          Descubre la magia de la naturaleza con nuestras cabalgatas y experiencias únicas.
        </p>
      </div>

      <div className="container text-center py-5">
        {/* Fila con dos columnas */}
        <div className="row my-5">
        <h2 className="section-title">Explora Nuestros Servicios</h2>
          {/* Columna para el Carrusel de productos */}
          <div className="col-md-8">
            <Carousel className="my-5">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={(images['../assets/images/cabalgata.png'] as { default: string }).default}
                  alt="Cabalgata en la isla"
                />
                <Carousel.Caption>
                  <h3>Cabalgatas</h3>
                  <p>Disfruta de un recorrido a caballo por paisajes espectaculares.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={(images['../assets/images/naturaleza.png'] as { default: string }).default}
                  alt="Naturaleza y descanso"
                />
                <Carousel.Caption>
                  <h3>Conexión con la Naturaleza</h3>
                  <p>Relájate en un entorno natural y vive una experiencia inolvidable.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={(images['../assets/images/yogurt.png'] as { default: string }).default}
                  alt="Yogur Natural"
                />
                <Carousel.Caption>
                  <h3>Yogur Natural</h3>
                  <p>Delicioso yogur natural, perfecto para cualquier momento del día.</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </div>

          {/* Columna para el video publicitario */}
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src={promo1}
                title="Video Publicitario"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

{/* Sección de experiencias destacadas */}
<div className="my-5">
  <h2 className="mb-4">Experiencias Destacadas</h2>
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img
          src={(images['../assets/images/ruta.jpg'] as { default: string }).default}
          className="card-img-top"
          alt="Ruta a caballo"
        />
        <div className="card-body">
          <h5 className="card-title">Ruta a Caballo</h5>
          <p className="card-text">Un recorrido guiado a caballo por los mejores paisajes de la isla.</p>
          <Button variant="primary">Descubrir</Button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src={(images['../assets/images/tirolesa.jpg'] as { default: string }).default}
          className="card-img-top"
          alt="Tirolesa"
        />
        <div className="card-body">
          <h5 className="card-title">Tirolesa</h5>
          <p className="card-text">Vive la emoción de deslizarte por las alturas y disfruta de vistas espectaculares.</p>
          <Button variant="primary">Explorar</Button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src={(images['../assets/images/familia.png'] as { default: string }).default}
          className="card-img-top"
          alt="Actividades en familia"
        />
        <div className="card-body">
          <h5 className="card-title">Actividades en la Familia</h5>
          <p className="card-text">Diviértete en la cabaña, rodeado de naturaleza y tranquilidad familiar.</p>
          <Button variant="primary">Ver más</Button>
        </div>
      </div>
    </div>
  </div>
</div>



        <div className="my-5">
          <h2 className="mb-4">Contacto</h2>
          <p>¿Listo para tu próxima aventura? ¡Contáctanos y reserva tu experiencia!</p>
          <Button variant="success" href="/contacto">
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
