import React, { useState, useEffect } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: string;
}

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/productos/listar'); 
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="productos-container">
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img 
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-imagen"
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="precio">${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
