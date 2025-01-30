import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container">
        <div className="row">
          {/* Sección de información de la empresa */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold mb-3">🧴 Yogures & Lácteos</h5>
            <p className="list-unstyled">
              Somos una empresa dedicada a ofrecer los mejores productos lácteos
              y yogures naturales, cuidando siempre la calidad y el sabor.
            </p>
          </div>

          {/* Sección de enlaces rápidos */}
          <div className="col-md-4 mb-4">
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
                <a href="/contacto" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold mb-3">Síguenos</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea de derechos reservados */}
        <div className="text-center mt-4 pt-3 border-top border-gray-700">
          <p className="mb-0">
            &copy; 2025 Yogures & Lácteos - María Jacinta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;