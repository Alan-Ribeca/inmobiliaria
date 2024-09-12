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
import { Servicios } from "./components/servicios/Servicios";
import { Nosotros } from "./components/nosotros/Nosotros";
import { Contacto } from "./components/contacto/Contacto";
import { PropiedadId } from "./components/propiedades/PropiedadId";
import { Footer } from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import "../css/style.css";
import { EliminarProp } from "./components/admin/EliminarProp";
import { EditarPropiedadId } from "./components/admin/EditarPropiedadId";

function App() {
  //utilizar contexto
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
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* iniciar sesion */}
            <Route path="/login" element={<Login />} />
            <Route path="/crear-usuario" element={<CrearCuenta />} />
            <Route path="/reset-password" element={<EditarCuenta />} />

            {/* Cliente */}
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/propiedades/:idPropiedad" element={<PropiedadId />} />

            {/* Admin */}
            <Route path="/subirProductos" element={<SubirProductos />} />
            <Route path="/editarProductos" element={<EditarPropiedades />} />
            <Route path="/eliminarPropiedad" element={<EliminarProp />} />
            <Route
              path="/editarProductos/:id"
              element={<EditarPropiedadId />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </CRMProvider>
    </BrowserRouter>
  );
}

export default App;
