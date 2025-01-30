import { Carousel, Button } from 'react-bootstrap';
import '../styles/Home.css';
import promo1 from '../assets/videos/promo1.mp4';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});
const Home = () => {
    return (
      <div className="container text-center py-5">
        <h1 className="display-3 font-weight-bold">Bienvenido a Maria Jacinta 🥛🍦</h1>
        <h2>Sabores de Campo</h2>
        <p className="mt-4 lead">Descubre los mejores yogures y productos lácteos frescos y naturales.</p>
  
        {/* Fila con dos columnas */}
        <div className="row my-5">
          {/* Columna para el Carrusel de productos */}
          <div className="col-md-8">
            <Carousel className="my-5">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={(images['../assets/images/logo.png'] as { default: string }).default}
                  alt="Yogur Natural"
                />
                <Carousel.Caption>
                  <h3>Yogur Natural</h3>
                  <p>Delicioso yogur natural, perfecto para cualquier momento del día.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={(images['../assets/images/logo.png'] as { default: string }).default}
                  alt="Queso Fresco"
                />
                <Carousel.Caption>
                  <h3>Queso Fresco</h3>
                  <p>Nuestro queso fresco, ideal para ensaladas y platos fríos.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={(images['../assets/images/logo.png'] as { default: string }).default}
                  alt="Helado Artesanal"
                />
                <Carousel.Caption>
                  <h3>Helado Artesanal</h3>
                  <p>Disfruta de nuestro helado artesanal, hecho con ingredientes naturales.</p>
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

      {/* Sección de productos destacados */}
      <div className="my-5">
        <h2 className="mb-4">Productos Destacados</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src={(images['../assets/images/logo.png'] as { default: string }).default}
                className="card-img-top"
                alt="Yogur de Frutas"
              />
              <div className="card-body">
                <h5 className="card-title">Yogur de Frutas</h5>
                <p className="card-text">Yogur con trozos de frutas frescas, lleno de sabor y nutrientes.</p>
                <Button variant="primary">Ver más</Button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={(images['../assets/images/logo.png'] as { default: string }).default}                
                className="card-img-top"
                alt="Leche Entera"
              />
              <div className="card-body">
                <h5 className="card-title">Leche Entera</h5>
                <p className="card-text">Leche entera fresca, directa de nuestras granjas.</p>
                <Button variant="primary">Ver más</Button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={(images['../assets/images/logo.png'] as { default: string }).default}
                className="card-img-top"
                alt="Yogur Griego"
              />
              <div className="card-body">
                <h5 className="card-title">Yogur Griego</h5>
                <p className="card-text">Yogur griego cremoso, perfecto para un desayuno saludable.</p>
                <Button variant="primary">Ver más</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="my-5">
        <h2 className="mb-4">Contacto</h2>
        <p>¿Tienes alguna pregunta o comentario? ¡No dudes en contactarnos!</p>
        <Button variant="success" href="/contacto">
          Contáctanos
        </Button>
      </div>
    </div>
  );
};

export default Home;