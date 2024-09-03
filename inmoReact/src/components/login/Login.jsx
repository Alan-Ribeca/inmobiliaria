import { Form } from "./Form";
import { Link } from "react-router-dom";
import './losEstilos/login.scss'
export const Login = () => {
  return (
    <>
      <section className="login">
        <h1 className="titleLogin">Iniciar sesion</h1>
        <p className="pLogin">Ingrese sus credenciales para inciar sesion</p>
        <Form />

        <div className="cuenta">
          <p className="resetPassword">
            <Link to={"/reset-password"}>Olvide mi contraseña </Link>{" "}
          </p>
          <p className="createAccount">
            ¿No tienes una cuenta?{" "}
            <Link to={"/crear-usuario"}>
              <strong className="crearCuenta">Regístrate</strong>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
