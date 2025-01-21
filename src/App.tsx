import { Route, Routes } from "react-router-dom";
import IniciarSesion from "@/components/pages/IniciarSecion";
import Reguistarse from "@/components/pages/Registrarse";
//import Usuarios from "@/components/pages/usuarios";
import Productos from "@/components/pages/productos";
//import Cocina from "@/components/pages/Cocina";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<IniciarSesion />} />
      <Route path="/register" element={<Reguistarse />} />
    {/*   <Route path="/usuarios" element={<Usuarios />} /> */}
      <Route path="/productos" element={<Productos />} />
{/*       <Route path="/cocina" element={<Cocina />} />*/}    
</Routes>
  );
}

export default App;

