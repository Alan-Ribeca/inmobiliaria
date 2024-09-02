import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CRMContext } from "../../../context/CRMContext";
export const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(CRMContext);

  const autenticado = auth.token;

  useEffect(() => {}, [auth]);

  const handleCerrarSesion = () => {
    // Actualizar el valor del token en localStorage a una cadena vacía
    localStorage.setItem("token", "");

    // Actualizar el estado de autenticación
    setAuth({
      token: "",
      auth: false,
      email: null,
    });

    // Redirigir al usuario a la página de login
    navigate("/login");
  };

  return (
    <>
      {auth.email === "alan@gmial.com" ? (
        <nav className="navadmin">
          <ul className="ulAdmin">
            <li className="liAdmin">
              <Link to="/">Inicio</Link>
            </li>
            <li className="liAdmin">
              <Link to="/subirProductos">Agregar proopiedades</Link>
            </li>
            <li className="liAdmin">
              <Link to="/editarProductos">Editar propiedades</Link>
            </li>
            <button className="btnSesion" onClick={handleCerrarSesion}>
              Cerrar sesion
            </button>
          </ul>
        </nav>
      ) : (
        <>
          <nav className="nav">
            <ul className="ulNav">
              <li className="liNav">
                <Link to="/">Inicio</Link>
              </li>
              <li className="liNav">
                {" "}
                <Link to="/propiedades">Propiedades</Link>
              </li>
              <li className="liNav">
                <Link to="/servicios">Servicios</Link>
              </li>
              <li className="liNav">
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li className="liNav">
                <Link to="/contacto">Contacto</Link>
              </li>

              <Link to="/login">
                <button className="btnSesion" onClick={handleCerrarSesion}>
                  {autenticado ? "Cerrar sesion" : "Iniciar sesion"}
                </button>
              </Link>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};
