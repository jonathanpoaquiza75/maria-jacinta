import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navbar.css';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Hook para obtener la ruta actual

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para verificar si la ruta es la actual
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue-600 p-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-xl font-bold text-black">
          <img 
            src={(images['../assets/images/logo.png'] as { default: string }).default}
            alt="Logo" 
            className="navbar-logo" 
            style={{ height: '40px' }}  // Puedes ajustar el tamaño según lo necesites
          />
          LA ISLA - MJ
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link text-black ${isActive("/")}`}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className={`nav-link text-black ${isActive("/productos")}`}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios" className={`nav-link text-black ${isActive("/servicios")}`}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre-nosotros" className={`nav-link text-black ${isActive("/sobre-nosotros")}`}>
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className={`nav-link text-black ${isActive("/contacto")}`}>
                Contacto
              </Link>
            </li>
          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <FaSearch style={{ color: "#000000" }} />
            </button>
          </form>

          <Link to="/carrito" className="btn btn-outline-light">
            <FaShoppingCart style={{ color: "#000000" }} /> <span className="badge bg-danger">3</span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
