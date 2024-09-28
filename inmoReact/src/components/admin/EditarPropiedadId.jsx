import { useLocation, useNavigate } from "react-router-dom";
import { Inputs } from "./Inputs";
import { useState, useEffect } from "react";
import datosAxios from "../../config/axios";

export const EditarPropiedadId = () => {
  const [archivoImg, setArchivoImg] = useState([]);
  const location = useLocation();
  const { propiedad } = location.state;
  const [imagenes, setImagenes] = useState(propiedad.imagenes);

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

    // Almacenar las URLs de las imágenes para previsualizarlas
    const imagePreviews = files.map((file) => URL.createObjectURL(file));

    // Almacenar los archivos originales en archivoImg para enviarlos al backend
    setArchivoImg((prevState) => [...prevState, ...files]);

    // Actualizar formData con las nuevas imágenes previsualizadas
    setFormData((prevState) => ({
      ...prevState,
      imagenes: [...prevState.imagenes, ...imagePreviews], // Para previsualización en el front-end
    }));
  };

  const handleRemoveImage = async (img, index) => {
    const isUploadedImg = archivoImg.includes(img);

    if (isUploadedImg) {
      // Si es una imagen nueva (que acabas de subir)
      const updatedArchivoImg = archivoImg.filter(
        (_, imgIndex) => imgIndex !== index
      );
      setArchivoImg(updatedArchivoImg);
    } else {
      // Si es una imagen preexistente en el backend
      const imagenAEliminar = img;

      try {
        await datosAxios.put(
          `/propiedades/${propiedad._id}`,
          { imagenesParaEliminar: [imagenAEliminar] },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(`Eliminación correcta: ${imagenAEliminar}`);
      } catch (error) {
        console.error("Error al eliminar la imagen:", error);
      }
    }

    // Actualizar el estado local de imágenes
    const updatedImagenes = imagenes.filter(
      (_, imgIndex) => imgIndex !== index
    );
    setImagenes(updatedImagenes);

    // Actualizar formData para reflejar la eliminación en ambos casos
    const updatedFormDataImages = formData.imagenes.filter(
      (_, imgIndex) => imgIndex !== index
    );
    setFormData((prevState) => ({
      ...prevState,
      imagenes: updatedFormDataImages,
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

      // Agregar imágenes existentes que no se han eliminado
      imagenes.forEach((img) => {
        formularioData.append("imagenesExistentes", img);
      });

      // Hacemos la solicitud PUT para actualizar la propiedad
      const res = await datosAxios.put(
        `/propiedades/${propiedad._id}`,
        formularioData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        alert("Propiedad actualizada correctamente");
        navigate("/editarProductos"); // Redirección al listado de propiedades
        console.log("Propiedad actualizada correctamente:", res.data);
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
                  <div key={img} style={{ position: "relative" }}>
                    <img
                      src={
                        img.startsWith("blob:")
                          ? img
                          : `${import.meta.env.VITE_BACKEND_URL}/uploads/${img}`
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
                      onClick={() => handleRemoveImage(img, index)}
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
