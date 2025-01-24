import { useState, useEffect } from "react";
import { Button, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Input, Select, SelectItem } from "@nextui-org/react";
import { Pencil, Trash2, Plus } from "lucide-react";
import Header from "@/components/organismos/Header";
import Sidebar from "@/components/organismos/sidebar";

interface Usuario {
  id_usuario: number;
  id_restaurante: number;
  nombre: string;
  correo: string;
  contrasena: string;
  rol: string;
  fecha: string;
}

const ROLES_USUARIO = ['Administrador', 'Cliente', 'Cocina'] as const;

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [usuarioActual, setUsuarioActual] = useState<Usuario>({
    id_usuario: 0,
    id_restaurante: 1,
    nombre: "",
    correo: "",
    contrasena: "",
    rol: "",
    fecha: new Date().toISOString().split("T")[0],
  });

  const fetchUsuarios = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay token disponible");

      const response = await fetch("http://localhost:3000/usuarios/listar", {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUsuarios(data);
      } else {
        setUsuarios([]);
      }
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay token disponible");

      const url = usuarioActual.id_usuario ? `http://localhost:3000/usuarios/actualizar/${usuarioActual.id_usuario}` : "http://localhost:3000/usuarios/registrar";

      const method = usuarioActual.id_usuario ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify(usuarioActual),
      });

      if (!response.ok) throw new Error("Error en la operación");

      fetchUsuarios();
      setModalVisible(false);
      setUsuarioActual({
        id_usuario: 0,
        id_restaurante: 1,
        nombre: "",
        correo: "",
        contrasena: "",
        rol: "",
        fecha: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const eliminarUsuario = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar este usuario?")) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay token disponible");

      const response = await fetch(`http://localhost:3000/usuarios/eliminar/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      if (!response.ok) throw new Error("Error al eliminar");

      fetchUsuarios();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const usuariosFiltrados = usuarios.filter((usuario) => Object.values(usuario).some((valor) => String(valor).toLowerCase().includes(busqueda.toLowerCase())));

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <div className="flex justify-between mb-4">
            <Input placeholder="Buscar usuarios..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} className="w-64" />
            <Button
              color="primary"
              onClick={() => {
                setUsuarioActual({
                  id_usuario: 0,
                  id_restaurante: 1,
                  nombre: "",
                  correo: "",
                  contrasena: "",
                  rol: "",
                  fecha: new Date().toISOString().split("T")[0],
                });
                setModalVisible(true);
              }}>
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Usuario
            </Button>
          </div>

          <Table aria-label="Tabla de usuarios">
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Correo</TableColumn>
              <TableColumn>Rol</TableColumn>
              <TableColumn>Fecha</TableColumn>
              <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No hay usuarios registrados">
              {usuariosFiltrados.map((usuario) => (
                <TableRow key={usuario.id_usuario}>
                  <TableCell>{usuario.id_usuario}</TableCell>
                  <TableCell>{usuario.nombre}</TableCell>
                  <TableCell>{usuario.correo}</TableCell>
                  <TableCell>{usuario.rol}</TableCell>
                  <TableCell>{usuario.fecha}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      isIconOnly
                      color="primary"
                      onClick={() => {
                        setUsuarioActual(usuario);
                        setModalVisible(true);
                      }}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button isIconOnly color="danger" onClick={() => eliminarUsuario(usuario.id_usuario)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {modalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h3 className="text-xl font-bold mb-4">{usuarioActual.id_usuario ? "Editar Usuario" : "Nuevo Usuario"}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input label="Nombre" value={usuarioActual.nombre} onChange={(e) => setUsuarioActual({ ...usuarioActual, nombre: e.target.value })} required />
                  <Input label="Correo" type="email" value={usuarioActual.correo} onChange={(e) => setUsuarioActual({ ...usuarioActual, correo: e.target.value })} required />
                  <Input
                    label="Contraseña"
                    type="password"
                    value={usuarioActual.contrasena}
                    onChange={(e) => setUsuarioActual({ ...usuarioActual, contrasena: e.target.value })}
                    required={!usuarioActual.id_usuario}
                  />
                  <Select 
                    label="Rol" 
                    value={usuarioActual.rol}
                    onChange={(e) => setUsuarioActual({...usuarioActual, rol: e.target.value})}
                    required
                  >
                    {ROLES_USUARIO.map((rol) => (
                      <SelectItem key={rol} value={rol}>
                        {rol}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input label="Fecha" type="date" value={usuarioActual.fecha} onChange={(e) => setUsuarioActual({ ...usuarioActual, fecha: e.target.value })} required />
                  <div className="flex justify-end gap-2">
                    <Button color="danger" onClick={() => setModalVisible(false)}>
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      Guardar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
