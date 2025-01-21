"use client";

import React, { useState, useEffect } from "react";
import { Button, Dropdown } from "@nextui-org/react";

// Definir el tipo de datos para los pedidos
type Pedido = {
  id_pedido: number;
  id_usuario: number;
  id_restaurante: number;
  nombre_cliente: string;
  estado: "En Preparacion" | "En Espera" | "Listo" | "Despachado" | "Cancelado";
  tipo_consumo: "Para Llevar" | "Para el Sitio";
  direccion: string | null;
  fecha: string;
};

export default function PedidosTable() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const  [filterStatus, setFilterStatus] = useState<string>("Todos");
  const [filterType, setFilterType] = useState<string>("Todos");

  // Simulación de datos de la tabla
  useEffect(() => {
    const fetchPedidos = async () => {
      const data: Pedido[] = [
        {
          id_pedido: 1,
          id_usuario: 101,
          id_restaurante: 10,
          nombre_cliente: "Juan Pérez",
          estado: "En Preparacion",
          tipo_consumo: "Para Llevar",
          direccion: "Calle Falsa 123",
          fecha: "2025-01-15T13:45:00",
        },
        {
          id_pedido: 2,
          id_usuario: 102,
          id_restaurante: 11,
          nombre_cliente: "Ana Gómez",
          estado: "Listo",
          tipo_consumo: "Para el Sitio",
          direccion: "Avenida Central 456",
          fecha: "2025-01-14T10:30:00",
        },
      ];
      setPedidos(data);
    };

    fetchPedidos();
  }, []);

  // Filtrar los pedidos por estado y tipo de consumo
  const filteredPedidos = pedidos.filter(
    (pedido) =>
      (filterStatus === "Todos" || pedido.estado === filterStatus) &&
      (filterType === "Todos" || pedido.tipo_consumo === filterType)
  );

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gestión de Pedidos</h1>


      {/* Tabla de Pedidos */}
      <div className="overflow-x-auto w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID Pedido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estadokl,g e    fj.-
                
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo de Consumo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dirección
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPedidos.map((pedido) => (
              <tr key={pedido.id_pedido}>
                <td className="px-6 py-4 whitespace-nowrap">{pedido.id_pedido}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pedido.nombre_cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pedido.estado}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pedido.tipo_consumo}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {pedido.direccion || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(pedido.fecha).toLocaleString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <Button size="sm" color="primary">
                      Editar
                    </Button>
                    <Button size="sm" color="danger">
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
