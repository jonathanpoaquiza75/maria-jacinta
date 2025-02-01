import { Link } from "react-router-dom";
import '../styles/Products.css';  // Asegúrate de importar el archivo CSS si lo estás usando

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
  eager: true, // Esto importa las imágenes inmediatamente en el bundle
});

const productos = [
  { id: 1, nombre: "Yogur Natural", precio: 2.5, imagen: (images['../assets/images/yogurt.png'] as { default: string }).default },
  { id: 2, nombre: "Leche Descremada", precio: 1.8, imagen: (images['../assets/images/leche-descremada.jpg'] as { default: string }).default },
  { id: 3, nombre: "Queso Fresco", precio: 3.5, imagen: (images['../assets/images/queso.png'] as { default: string }).default },
];

const Products = () => {
  return (
    <div className="container my-5">
      {/* Encabezado */}
      <h1 className="text-center mb-4 product-title">Nuestros Productos 🥛</h1>

      {/* Cuadrícula de productos */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col">
            <div className="card h-100">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="card-img-top producto-imagen"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <Link to={`/producto/${producto.id}`} className="btn btn-primary">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
