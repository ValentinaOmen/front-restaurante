import { Route, Routes } from "react-router-dom";
import IniciarSesion from "@/components/pages/IniciarSecion";
import Reguistarse from "@/components/pages/Registrarse";
import Dashboard from "@/components/pages/Dashboard";
import Pedidos from "@/components/pages/Pedidos";
import Menu from "./components/pages/Menu";
import Usuarios from "@/components/pages/Usuarios";
import Productos from "@/components/pages/Productos";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<IniciarSesion />} />
      <Route path="/register" element={<Reguistarse />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/menu" element={<Menu />} />
  </Routes>
  );
}

export default App;

