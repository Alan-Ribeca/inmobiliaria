import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";
import { CrearCuenta } from "./components/login/CrearCuenta";
import { EditarCuenta } from "./components/login/EditarCuenta";
import { CRMContext, CRMProvider } from "./context/CRMContext";
import { useContext } from "react";
import { Propiedades } from "./components/propiedades/Propiedades";
function App() {
  //utilizar context9
  const [auth, setAuth] = useContext(CRMContext);

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
          </Routes>
        </main>
      </CRMProvider>
    </BrowserRouter>
  );
}

export default App;
