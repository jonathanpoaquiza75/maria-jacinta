import { useParams } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Yogur Natural", descripcion: "Yogur sin azúcar, 100% natural", precio: 2.5 },
  { id: 2, nombre: "Leche Descremada", descripcion: "Leche fresca baja en grasa", precio: 1.8 },
  { id: 3, nombre: "Queso Fresco", descripcion: "Queso artesanal de leche pura", precio: 3.5 },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <h2 className="text-center text-red-600">Producto no encontrado</h2>;
  }

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">{producto.nombre}</h1>
      <p className="text-lg">{producto.descripcion}</p>
      <p className="text-xl font-semibold mt-2">Precio: ${producto.precio}</p>
    </div>
  );
};

export default ProductDetail;
