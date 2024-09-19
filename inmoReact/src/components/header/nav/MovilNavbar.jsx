import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CRMContext } from "../../../context/CRMContext";
import "./movilNavbar.scss";
export const MovilNavbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(CRMContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAbrir = () => {
    setMenuVisible(!menuVisible);
  };

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
        <nav className="movilNav">
          <div className="logo">
            <p className="nombre">
              Inmo<span className="span">Home</span>{" "}
            </p>
          </div>
          <div className="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="menuSvg"
              viewBox="0 0 16 16"
              onClick={handleAbrir}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            <div className={`${menuVisible === true ? "abierto" : "cerrado"}`}>
              <ul className="ul">
                <li className="liNav">
                  <Link to="/" className="enlaces">
                    Inicio
                  </Link>
                </li>
                <li className="liNav">
                  {" "}
                  <Link to="/subirProductos" className="enlaces">
                    Agregar Prop
                  </Link>
                </li>
                <li className="liNav">
                  <Link to="/editarProductos" className="enlaces">
                    Editar Prop
                  </Link>
                </li>
                <li className="liNav">
                  <Link to="/eliminarPropiedad" className="enlaces">
                    Eliminar Prop
                  </Link>
                </li>
              </ul>
              <Link to="/login">
                <button onClick={handleCerrarSesion}>
                  <span className="btnSesion">
                    {autenticado ? "Cerrar sesion" : "Iniciar sesion"}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <>
          <nav className="movilNav">
            <div className="containerNav">
              <ul className="ul">
                <li className="liNav">
                  <Link to="/" className="enlaces">
                    Inicio
                  </Link>
                </li>
                <li className="liNav">
                  {" "}
                  <Link to="/propiedades" className="enlaces">
                    Propiedades
                  </Link>
                </li>
                <li className="liNav">
                  <Link to="/servicios" className="enlaces">
                    Servicios
                  </Link>
                </li>
                <li className="liNav">
                  <Link to="/nosotros" className="enlaces">
                    Nosotros
                  </Link>
                </li>
                <li className="liNav">
                  <Link to="/contacto" className="enlaces">
                    Contacto
                  </Link>
                </li>
              </ul>
              <Link to="/login">
                <button onClick={handleCerrarSesion}>
                  <span className="btnSesion">
                    {autenticado ? "Cerrar sesion" : "Iniciar sesion"}
                  </span>
                </button>
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
