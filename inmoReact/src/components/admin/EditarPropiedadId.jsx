/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import { Inputs } from "./Inputs";
import { useState, useEffect } from "react";
import datosAxios from "../../config/axios";

export const EditarPropiedadId = () => {
  const [archivoImg, setArchivoImg] = useState([]);
  const location = useLocation();
  const { propiedad } = location.state;

  const [formData, setFormData] = useState({
    titulo: "",
    precioPropiedad: "",
    expensas: "",
    anoPropiedad: "",
    banos: "",
    coquera: "",
    descripcion: "",
    habitaciones: "",
    superficie: "",
    ubicacion: "",
    imagenes: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (propiedad) {
      setFormData({
        titulo: propiedad.titulo || "",
        precioPropiedad: propiedad.precio?.propiedad || "",
        expensas: propiedad.precio?.expensas || "",
        anoPropiedad: propiedad.informacion?.anoPropiedad || "",
        banos: propiedad.informacion?.banos || "",
        coquera: propiedad.informacion?.coquera || "",
        descripcion: propiedad.informacion?.descripcion || "",
        habitaciones: propiedad.informacion?.habitaciones || "",
        superficie: propiedad.informacion?.superficie || "",
        ubicacion: propiedad.informacion?.ubicacion || "",
        imagenes: propiedad.imagenes || [],
        _id: propiedad._id,
      });
    }
  }, [propiedad]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const totalImages = formData.imagenes.length + files.length;

    if (totalImages > 5) {
      alert("Solo puedes subir hasta 5 imágenes en total");
      return;
    }

    const imagePreviews = files.map((file) => URL.createObjectURL(file));

    // Almacenar los archivos originales (en lugar de las URLs) en archivoImg
    setArchivoImg((prevState) => [...prevState, ...files]);

    // Agregar las nuevas imágenes previsualizadas
    setFormData((prevState) => ({
      ...prevState,
      imagenes: [...prevState.imagenes, ...imagePreviews], // Para previsualización en el front-end
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    const vacios = Object.values(formData).some(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    );

    if (vacios) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const {
        titulo,
        precioPropiedad,
        expensas,
        anoPropiedad,
        banos,
        coquera,
        descripcion,
        habitaciones,
        superficie,
        ubicacion,
      } = formData;

      const formularioData = new FormData();
      formularioData.append("titulo", titulo);
      formularioData.append("precio[propiedad]", precioPropiedad);
      formularioData.append("precio[expensas]", expensas);
      formularioData.append("informacion[superficie]", superficie);
      formularioData.append("informacion[habitaciones]", habitaciones);
      formularioData.append("informacion[banos]", banos);
      formularioData.append("informacion[coquera]", coquera);
      formularioData.append("informacion[anoPropiedad]", anoPropiedad);
      formularioData.append("informacion[descripcion]", descripcion);
      formularioData.append("informacion[ubicacion]", ubicacion);

      // Agregar imágenes nuevas
      archivoImg.forEach((img) => {
        formularioData.append("imagenes", img); // Agregar cada archivo
      });

      // Hacemos la solicitud PUT para actualizar la propiedad
      const res = await datosAxios.put(
        `/propiedades/${propiedad._id}`,
        formularioData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        // navigate("/editarProductos");
      }
    } catch (error) {
      console.error("Hubo un error al actualizar la propiedad:", error);
    }
  };

  return (
    <>
      <h1>Editar Propiedad</h1>

      <section className="agregarPropiedad">
        <form onSubmit={handleSubmit} className="form">
          <Inputs formData={formData} handleInputChange={handleInputChange} />
          <div className="subirLasImg">
            <label htmlFor="imagenes">Subir Imágenes (máx. 5)</label>
            <input
              type="file"
              id="imagenes"
              name="imagenes"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            {formData.imagenes.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginTop: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {formData.imagenes.map((img, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={
                        archivoImg.includes(img)
                          ? img
                          : `http://localhost:2000/uploads/${img}`
                      }
                      alt={`imagen-${index}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="cruz"
                      viewBox="0 0 16 16"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      // onClick={() => handleRemoveImage(index)}
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="btnSubirPropiedad" type="submit">
            Editar Propiedad
          </button>
        </form>
      </section>
    </>
  );
};
