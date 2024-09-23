import { Inputs } from "./Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import datosAxios from "../../config/axios";
import "./subirPropiedad.scss";
export const SubirProductos = () => {
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
  });

  const [archivoImg, setArchivoImg] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Comprobamos que no haya más de 5 imágenes seleccionadas
    if (files.length + archivoImg.length > 5) {
      alert("Solo puedes subir hasta 5 imágenes en total");
      return;
    }

    // Actualizamos el estado con las imágenes nuevas
    setArchivoImg((prevState) => [...prevState, ...files]);
  };
  // Función para eliminar una imagen
  const handleRemoveImage = (index) => {
    const updatedImages = archivoImg.filter(
      (_, imgIndex) => imgIndex !== index
    );
    setArchivoImg(updatedImages);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formularioData = new FormData();
    formularioData.append("titulo", formData.titulo);
    formularioData.append("precio[propiedad]", formData.precioPropiedad);
    formularioData.append("precio[expensas]", formData.expensas);
    formularioData.append("informacion[superficie]", formData.superficie);
    formularioData.append("informacion[habitaciones]", formData.habitaciones);
    formularioData.append("informacion[banos]", formData.banos);
    formularioData.append("informacion[coquera]", formData.coquera);
    formularioData.append("informacion[anoPropiedad]", formData.anoPropiedad);
    formularioData.append("informacion[descripcion]", formData.descripcion);
    formularioData.append("informacion[ubicacion]", formData.ubicacion);

    // Añadir imágenes
    if (Array.isArray(archivoImg)) {
      archivoImg.forEach((file) => {
        formularioData.append("imagenes", file);
      });
    } else {
      formularioData.append("imagenes", archivoImg);
    }

    try {
      const res = await datosAxios.post("/propiedades", formularioData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        console.log("La propiedad se creo correctamente");
        alert("La propiedad se creo correctamente");
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Hubo un error al subir la propiedad:",
        error.response || error.message
      );
    }
  };

  return (
    <>
      <h1 className="titleAgregar">Agregar propiedades</h1>
      <p className="textoAgregar">
        Complete los campos con los datos correspondientes para agregar una
        nueva propiedad
      </p>

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
          <div className="containerDiv">
            {archivoImg.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginTop: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {archivoImg.map((img, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={URL.createObjectURL(img)}
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
                      style={{ position: "absolute", top: "5px", right: "5px", color: 'red', cursor: 'pointer'}}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="btnSubirPropiedad" type="submit">
            Agregar Propiedad
          </button>
        </form>
      </section>
    </>
  );
};
