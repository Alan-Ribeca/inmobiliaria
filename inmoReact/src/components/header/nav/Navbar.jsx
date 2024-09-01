import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
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
            <button className="btnSesion">Iniciar sesion</button>
          </Link>
        </ul>
      </nav>
    </>
  );
};
