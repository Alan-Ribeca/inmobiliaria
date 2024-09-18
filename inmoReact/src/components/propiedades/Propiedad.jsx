/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import datosAxios from "../../config/axios";
import "./propiedad.scss";
import { useState } from "react";
export const Propiedad = ({ propiedad }) => {
  const {
    titulo,
    precio: { propiedad: precioPropiedad, expensas },
    informacion: { banos, habitaciones, superficie, ubicacion },
    imagenes,
    _id,
  } = propiedad;

  const [actualizarImg, setActualizarImg] = useState(0);

  function handleNextImg() {
    setActualizarImg((prevIndex) =>
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrevImg() {
    setActualizarImg((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  }

  const location = useLocation();

  const linkText = () => {
    if (location.pathname === "/editarProductos") {
      return "Editar Propiedad";
    } else if (location.pathname === "/eliminarPropiedad") {
      return "Eliminar Propiedad";
    } else {
      return "Ver más detalles";
    }
  };

  const url = () => {
    if (location.pathname === "/editarProductos") {
      return `/editarProductos/:${_id}`;
    } else if (location.pathname === "/eliminarPropiedad") {
      return "";
    } else {
      return `/propiedades/${_id}`;
    }
  };

  const hanldeEliminar = () => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar esta propiedad?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        datosAxios
          .delete(`/propiedades/${_id}`)
          .then((response) => {
            Swal.fire({
              title: "Propiedad eliminada correctamente",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => {
              // Refrescar la página después de hacer clic en "OK"
              window.location.reload();
            });
          })
          .catch((error) => {
            Swal.fire("Hubo un error al eliminar la propiedad");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Se cancelo la eliminacion de la propiedad");
      }
    });
  };
  return (
    <>
      <section
        className="containerProp"
        style={{
          backgroundImage: `url(http://localhost:2000/uploads/${imagenes[actualizarImg]})`,
      
        }}
      >
        <div className="colorGris"></div>
        <h2 className="titleProp">{titulo}</h2>
        <div className="descripcion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="ubiLogo"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          <p className="ubicacion">{ubicacion}</p>
        </div>
        <div className="containerInfo">
          <div className="precios">
            <p className="preNumero">
              <strong className="signo">$</strong> {precioPropiedad}{" "}
              <strong className="moneda">ARS</strong>
            </p>
            {expensas == null ? (
              ""
            ) : (
              <p className="conExpensa">+ ${expensas} expensas</p>
            )}
          </div>

          <div className="info">
            <ul>
              <li className="liInfo">
                <FontAwesomeIcon
                  icon={faBath}
                  style={{ fontSize: "16px", color: "white" }}
                />
                <span> {banos} Baños</span>
              </li>
              <li className="liInfo">
                <FontAwesomeIcon icon={faBed} />
                <span> {habitaciones} Habitaciones</span>
              </li>
              <li className="liInfo">
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
            </ul>
          </div>
        </div>
        <Link
          to={url()}
          state={{ propiedad }}
          onClick={(e) => {
            if (location.pathname === "/eliminarPropiedad") {
              e.preventDefault();
              hanldeEliminar();
            }
          }}
        >
          <button className="btnInfo">
            {linkText()}
            <span className="flecha">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="flechasvg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </button>
        </Link>
        <div className="puntos">
          {imagenes.map((_, index) => (
            <span
              key={index}
              className={`punto ${index === actualizarImg ? "marcado" : ""}`}
            ></span>
          ))}
        </div>
        <div className="flechaImg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="flechaCambiar izquierda"
            viewBox="0 0 16 16"
            onClick={() => handlePrevImg()}
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="flechaCambiar derecha"
            viewBox="0 0 16 16"
            onClick={() => handleNextImg()}
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </div>
      </section>
    </>
  );
};
