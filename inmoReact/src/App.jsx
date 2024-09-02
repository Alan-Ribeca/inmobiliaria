import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";
import { CrearCuenta } from "./components/login/CrearCuenta";
import { EditarCuenta } from "./components/login/EditarCuenta";
import { CRMContext, CRMProvider } from "./context/CRMContext";
import { Propiedades } from "./components/propiedades/Propiedades";
import { SubirProductos } from "./components/admin/SubirProductos";
import { EditarPropiedades } from "./components/admin/EditarPropiedades";
function App() {
  //utilizar context9
  const [auth, setAuth] = useContext(CRMContext);

  useEffect(() => {
    //verificar si ya existe token en el localStorage
    if (!localStorage.getItem("token")) {
      //si no existe lo creo
      localStorage.setItem("token", "");
    }
  }, []);

  return (
    <BrowserRouter>
      <CRMProvider value={[auth, setAuth]}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* iniciar sesion */}
            <Route path="/login" element={<Login />} />
            <Route path="/crear-usuario" element={<CrearCuenta />} />
            <Route path="/reset-password" element={<EditarCuenta />} />

            {/* PROPIEDADES */}
            <Route path="/propiedades" element={<Propiedades />} />

            {/* Admin */}
            <Route path="/subirProductos" element={<SubirProductos />} />
            <Route path="/editarProductos" element={<EditarPropiedades />} />
          </Routes>
        </main>
      </CRMProvider>
    </BrowserRouter>
  );
}

export default App;
