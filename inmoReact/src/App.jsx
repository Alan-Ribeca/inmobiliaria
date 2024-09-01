import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";
import { CrearCuenta } from "./components/login/CrearCuenta";
import { EditarCuenta } from "./components/login/EditarCuenta";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* iniciar sesion */}
          <Route path="/login" element={<Login />} />
          <Route path="/crear-usuario" element={<CrearCuenta />} />
          <Route path="/reset-password" element={<EditarCuenta />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
