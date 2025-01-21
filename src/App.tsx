import { Route, Routes } from "react-router-dom";
import IniciarSecion from "@/components/pages/IniciarSecion.tsx";
import Reguistarse from "@/components/pages/Registrarse";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<IniciarSecion />} />,
      <Route path="/register" element={<Reguistarse />} />
    </Routes>
  );
}

export default App;
