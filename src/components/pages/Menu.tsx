import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Header from "@/components/organismos/Header";
import Sidebar from "@/components/organismos/sidebar";

const Menu = () => {
  const [comidas, setComidas] = useState([]);

  // Simulación de datos (reemplazar con API real)
  useEffect(() => {
    const platosEjemplo = [
      {
        id: 1,
        nombre: "Hamburguesa Clásica",
        imagen: "/assets/registrar.jpg",
        precio: 12.99,
        descripcion: "Deliciosa hamburguesa con carne 100% de res.",
      },
      {
        id: 2,
        nombre: "Pizza Margherita",
        imagen: "/assets/inicisiar.jpg",
        precio: 15.99,
        descripcion: "Pizza tradicional italiana con tomate y mozzarella.",
      },
      {
        id: 3,
        nombre: "Tacos al Pastor",
        imagen: "/assets/registrar.jpg",
        precio: 9.99,
        descripcion: "Tacos mexicanos con carne al pastor y piña.",
      },
      {
        id: 4,
        nombre: "Ensalada César",
        imagen: "/assets/inicisiar.jpg",
        precio: 7.99,
        descripcion: "Fresca ensalada con pollo, lechuga y aderezo César.",
      },
      {
        id: 5,
        nombre: "Sushi Roll",
        imagen: "/assets/registrar.jpg",
        precio: 14.99,
        descripcion: "Rollo de sushi con aguacate y salmón fresco.",
      },
      {
        id: 6,
        nombre: "Pasta Alfredo",
        imagen: " /assets/inicisiar.jpg",
        precio: 13.99,
        descripcion: "Pasta con salsa Alfredo y trozos de pollo.",
      },
    ];
    setComidas(platosEjemplo);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header /> 
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestro Menú</h1>

      {/* ✅ FILAS DE 3 TARJETAS */}
      <div className="flex flex-col gap-8">
        {Array.from({ length: Math.ceil(comidas.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6">
            {comidas.slice(rowIndex * 3, rowIndex * 3 + 3).map((comida) => (
              <Card key={comida.id} isHoverable className="w-full max-w-[320px] shadow-lg hover:scale-105 transition-transform">
                <CardBody className="p-0">
                  <Image src={comida.imagen} alt={comida.nombre} width="100%" height={200} className="object-cover rounded-t-lg" />
                </CardBody>
                <CardFooter className="flex flex-col items-start p-4">
                  <h2 className="text-xl font-semibold">{comida.nombre}</h2>
                  <p className="text-sm text-gray-600 my-2">{comida.descripcion}</p>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-lg font-bold">${comida.precio}</span>
                    <Button color="primary">Comprar</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Menu;
