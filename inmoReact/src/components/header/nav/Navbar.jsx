import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CRMContext } from "../../../context/CRMContext";
import "./navBar.scss";
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
            <div className="logo">
              <p className="nombre">
                Inmo<span className="span">Home</span>{" "}
              </p>
            </div>
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
            </ul>
            <Link to="/login">
              <button onClick={handleCerrarSesion}>
                <span className="btnSesion">{autenticado ? "Cerrar sesion" : "Iniciar sesion"}</span>
              </button>
            </Link>
          </nav>
        </>
      )}
    </>
  );
};
