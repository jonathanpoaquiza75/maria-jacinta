import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue-600 p-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-xl font-bold">
          🧴 Yogures & Lácteos - MJ
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
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/categorias"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/categorias/yogures" className="dropdown-item">
                    Yogures
                  </Link>
                </li>
                <li>
                  <Link to="/categorias/leches" className="dropdown-item">
                    Leches
                  </Link>
                </li>
                <li>
                  <Link to="/categorias/postres" className="dropdown-item">
                    Postres
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
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
              <FaSearch />
            </button>
          </form>

          <Link to="/carrito" className="btn btn-outline-light">
            <FaShoppingCart /> <span className="badge bg-danger">3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;