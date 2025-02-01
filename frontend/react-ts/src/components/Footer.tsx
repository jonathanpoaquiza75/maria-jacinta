import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/Footer.css';
import { Link } from "react-router-dom";
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});
const Footer = () => {
  // Coordenadas de la ubicación específica
  const location = {
    lat: -0.9033520765327381, // Latitud
    lng: -78.60882433876824, // Longitud
  };
  const containerStyle = {
    width: '100%',
    height: '200px', // Asegúrate de que el mapa tenga suficiente altura
  };

  const options = {
    disableDefaultUI: true, // Desactiva los controles predeterminados del mapa
    zoomControl: true, // Activa el control de zoom
    fullscreenControl: true, // Activa el botón de pantalla completa
  };

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container">
        <div className="row">
          {/* Sección de información de la empresa */}
          <div className="col-md-3 mb-4">
          <Link to="/" className="navbar-brand text-xl font-bold text-white">
          <img 
            src={(images['../assets/images/logo.png'] as { default: string }).default}
            alt="Logo" 
            className="navbar-logo" 
            style={{ height: '40px' }}  // Puedes ajustar el tamaño según lo necesites
          />
          LA ISLA - MJ
        </Link>
            <p className="list-unstyled">
              Somos una empresa dedicada a ofrecer experiencias únicas y conectar con la naturaleza. Brindamos productos lácteos y yogures naturales de la más alta calidad.
            </p>
          </div>

          {/* Sección de enlaces rápidos */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/productos" className="text-white text-decoration-none">
                  Productos
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white text-decoration-none">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros" className="text-white text-decoration-none">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Síguenos</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/laislamj1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=%2B593995658958&context=ARBKvwfOTZh0cojlSgiceZga71c-NDKex9aFK8AqzOxmR-t7SGlMuqFFm6lsW6tb2i0aOFB8oe1Pf-0Vxkp5u75uLYjWBQqSog91gmgro7rCWcyVojs4GSBkoNbOFieSI7UgdFQT91dCQ6Dk4-xul0xOkQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawILPDpleHRuA2FlbQIxMAABHZt7tWAEApC5OZ3Njzps6Y9hGY9Wy-fi_9SYEpHJv7II7GMlEM2Z559RGw_aem_-hQpQQWNvOCaP6XxRqBwzw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Sección de mapa */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Ubicación</h5>
            <LoadScript googleMapsApiKey="AIzaSyA9F18AVJuw0nsIt-f3K82joPFzwxeFKag">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location} // Asegúrate de que las coordenadas estén bien configuradas
                zoom={14} // Nivel de zoom del mapa
                options={options}
              >
                {/* El marcador en la ubicación especificada */}
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        {/* Línea de derechos reservados */}
        <div className="text-center mt-4 pt-3 border-top border-gray-700">
          <p className="mb-0">
            &copy; 2025 La Isla María Jacinta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
