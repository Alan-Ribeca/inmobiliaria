/* eslint-disable react/prop-types */
import "./inputs.scss";
export const Inputs = ({ formData, handleInputChange }) => {
  return (
    <ul className="ulInputs">
      <li className="li">
        <label className="label">Titulo de la propiedad</label>
        <input
          type="text"
          className="input"
          name="titulo"
          placeholder="Ej. Casa con vista al mar"
          value={formData.titulo}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Precio del alquiler</label>
        <input
          type="text"
          className="input"
          name="precioPropiedad"
          placeholder="Ej. 150000"
          value={formData.precioPropiedad}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Precio de las expensas</label>
        <input
          type="text"
          className="input"
          name="expensas"
          placeholder="Ej. 10000"
          value={formData.expensas}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Metro cuadrado de la propiedad</label>
        <input
          type="text"
          className="input"
          name="superficie"
          placeholder="Ej. 95"
          value={formData.superficie}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Habitaciones</label>
        <input
          type="text"
          className="input"
          name="habitaciones"
          placeholder="Ej. 2"
          value={formData.habitaciones}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Baños</label>
        <input
          type="text"
          className="input"
          name="banos"
          placeholder="Ej. 1"
          value={formData.banos}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Cochera</label>
        <input
          type="text"
          className="input"
          name="coquera"
          placeholder="Ej. si"
          value={formData.coquera}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Ubicación</label>
        <input
          type="text"
          className="input"
          name="ubicacion"
          placeholder="Ej. Calle falsa 123, Rosario"
          value={formData.ubicacion}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Año de la propiedad</label>
        <input
          type="text"
          className="input"
          name="anoPropiedad"
          placeholder="Ej. 2024"
          value={formData.anoPropiedad}
          onChange={handleInputChange}
        />
      </li>
      <li className="li">
        <label className="label">Descripción de la propiedad</label>
        <input
          type="text"
          className="input"
          name="descripcion"
          placeholder="Descripción de la propiedad"
          value={formData.descripcion}
          onChange={handleInputChange}
        />
      </li>
    </ul>
  );
};
