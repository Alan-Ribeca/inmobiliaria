/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import "./propiedadId.scss";
import { useState } from "react";
export const PropiedadId = () => {
  const location = useLocation();
  const { propiedad } = location.state;
  const {
    titulo,
    imagenes,
    precio: { propiedad: precioPropiedad, expensas },
    informacion: {
      anoPropiedad,
      banos,
      coquera,
      descripcion,
      habitaciones,
      superficie,
      ubicacion,
    },
    _id,
  } = propiedad;
  const antiguedad = 2024 - anoPropiedad;

  const [actualizarImg, setActualizarImg] = useState(0)

console.log(actualizarImg)

  return (
    <>
      <section className="cardImagenes">
        <div className="imgPrincipal">
          <img
            src={`http://localhost:2000/uploads/${imagenes[actualizarImg]}`}
            alt="Imagen de la propiedad"
            className="imgPrinc"
          />
        </div>
        <div className="imgSecundarias">
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={`http://localhost:2000/uploads/${imagen}`}
              alt={`Imagen ${index + 1} de la propiedad`}
              className="imgSecu"
              onClick={() => setActualizarImg(index)}
            />
          ))}
        </div>
      </section>
      <section className="informacion">
        <div className="cardIzquierdaContainer">
          <div className="containerInfo">
            <div className="titleYubicacion">
              <h2 className="title">{titulo}</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="ubiLogo"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>{" "}
                {ubicacion}
              </span>
            </div>
            <h3 className="infoDemas">Informacion sobre la propiedad</h3>
            <p className="precio">${precioPropiedad} ARS</p>
            <p className="expensas">Expensas ${expensas} ARS</p>

            <div className="infoCompleta">
              <ul>
                <li className="datos">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-border"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 0h.969v.5H1v.469H.969V1H.5V.969H0zm2.844 1h-.938V0h.938zm1.875 0H3.78V0h.938v1zm1.875 0h-.938V0h.938zm.937 0V.969H7.5V.5h.031V0h.938v.5H8.5v.469h-.031V1zm2.813 0h-.938V0h.938zm1.875 0h-.938V0h.938zm1.875 0h-.938V0h.938zM15.5 1h-.469V.969H15V.5h.031V0H16v.969h-.5zM1 1.906v.938H0v-.938zm6.5.938v-.938h1v.938zm7.5 0v-.938h1v.938zM1 3.78v.938H0V3.78zm6.5.938V3.78h1v.938zm7.5 0V3.78h1v.938zM1 5.656v.938H0v-.938zm6.5.938v-.938h1v.938zm7.5 0v-.938h1v.938zM.969 8.5H.5v-.031H0V7.53h.5V7.5h.469v.031H1v.938H.969zm1.875 0h-.938v-1h.938zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938zm1.875-.031V8.5H7.53v-.031H7.5V7.53h.031V7.5h.938v.031H8.5v.938zm1.875.031h-.938v-1h.938zm1.875 0h-.938v-1h.938zm1.875 0h-.938v-1h.938zm1.406 0h-.469v-.031H15V7.53h.031V7.5h.469v.031h.5v.938h-.5zM0 10.344v-.938h1v.938zm7.5 0v-.938h1v.938zm8.5-.938v.938h-1v-.938zM0 12.22v-.938h1v.938zm7.5 0v-.938h1v.938zm8.5-.938v.938h-1v-.938zM0 14.094v-.938h1v.938zm7.5 0v-.938h1v.938zm8.5-.938v.938h-1v-.938zM.969 16H0v-.969h.5V15h.469v.031H1v.469H.969zm1.875 0h-.938v-1h.938zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938zm.937 0v-.5H7.5v-.469h.031V15h.938v.031H8.5v.469h-.031v.5zm2.813 0h-.938v-1h.938zm1.875 0h-.938v-1h.938zm1.875 0h-.938v-1h.938zm.937 0v-.5H15v-.469h.031V15h.469v.031h.5V16z" />
                  </svg>
                  <span> {superficie} m² Totales</span>
                </li>
                <li className="datos">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-columns"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z" />
                  </svg>
                  <span> {habitaciones} Hambientes</span>
                </li>
                <li className="datos">
                  {" "}
                  <FontAwesomeIcon icon={faBed} />
                  <span> {habitaciones} Habitaciones</span>
                </li>
                <li className="datos">
                  <FontAwesomeIcon
                    icon={faBath}
                    style={{ fontSize: "16px", color: "black" }}
                  />
                  <span>{banos} Baños</span>
                </li>
                <li className="datos">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                  <span>Antiguedad: {antiguedad} años </span>
                </li>
                <li className="datos">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-car-front-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                  </svg>
                  <span>Cochera {coquera}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="descripcion">
            <h4 className="titleDescrip">Descripcion de la propiedad:</h4>
            <p className="pDescripcion">{descripcion}</p>
          </div>
        </div>
        <div className="cardIzquierda">
          <h3>Envianos un mensaje</h3>
          <p className="pMensaje">
            una vez enviado el mensaje unos de nuestros empleados se pondra en
            contacto contigo.
          </p>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />

          <label>Correo electronico</label>
          <input type="email" placeholder="tuCorreo@ejemplo.com" />

          <label>Mensaje</label>
          <textarea
            placeholder="Escribe tu mensaje"
            className="textarea"
          ></textarea>

          <button className="btnMensaje">Enviar mensaje</button>
        </div>
      </section>
    </>
  );
};
