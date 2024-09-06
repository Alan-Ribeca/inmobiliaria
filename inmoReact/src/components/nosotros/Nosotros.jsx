import "./nosotros.scss";
export const Nosotros = () => {
  return (
    <>
      <h1 className="titleNos">Sobre Nosotros</h1>
      <section className="containerNos">
        <div className="containerTexto">
          <p className="texto">
            InmoHome es líder en el mercado inmobiliario Argentino desde hace
            más de 20 años. Nos especializamos en brindar soluciones integrales
            para todas sus necesidades inmobiliarias, desde la compra y venta
            hasta el alquiler y la gestión de propiedades.
          </p>
          <p className="texto ">
            Nuestro equipo de profesionales altamente calificados está
            comprometido con ofrecer un servicio excepcional y personalizado a
            cada uno de nuestros clientes, garantizando su satisfacción en cada
            transacción.
          </p>
          <p className="textoContactar">Contactanos para mas Informacion.</p>
          <button className="btnContactar">Contactar</button>
        </div>
        <div className="nosotros">
          <div className="servicio">
            <p className="logoContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="logoServ"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </p>
            <h3>Equipo Experto</h3>
            <p className="parrafo">
              Profesionales con años de experiencia en el sector inmobiliario.
            </p>
          </div>
          <div className="servicio">
            <p className="logoContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="logoServ"
                viewBox="0 0 16 16"
              >
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
              </svg>
            </p>
            <h3>Calidad Garantizada</h3>
            <p className="parrafo">
              Comprometidos con la excelencia en cada servicio que ofrecemos.
            </p>
          </div>
          <div className="servicio">
            <p className="logoContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="logoServ"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                />
              </svg>
            </p>
            <h3>Innovación Constante</h3>
            <p className="parrafo">
              Utilizamos las últimas tecnologías para mejorar nuestros
              servicios.
            </p>
          </div>
          <div className="servicio">
            <p className="logoContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="logoServ"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
            </p>
            <h3>Cobertura Nacional</h3>
            <p className="parrafo">
              Presencia en las principales ciudades de Argentina.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
