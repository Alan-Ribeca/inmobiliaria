import "./servicios.scss";
export const Servicios = () => {
  return (
    <>
      <h1 className="titleServ">Nuestros servicios</h1>
      <p className="infoServ">
        Ofrecemos una gama completa de servicios inmobiliarios para satisfacer
        todas sus necesidades
      </p>
      <section className="containerServ">
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
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </p>
          <h3>Busqueda de propiedades</h3>
          <p className="parrafo">
            Encontramos la propiedad perfecta que se ajuste a tus necesidades y
            presupuesto.
          </p>

          <ul>
            <li>✅ Entendimiento profundo de sus requerimientos</li>
            <li>✅ Búsqueda exhaustiva en el mercado</li>
            <li>✅ Visitas guiadas a propiedades seleccionadas</li>
            <li>✅ Asesoramiento en la decisión final</li>
          </ul>
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
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
            </svg>
          </p>
          <h3>Valoracion de Inmuebles</h3>
          <p className="parrafo">
            Ofrecemos tasaciones precisas basadas en el mercado actual y las
            caracteristicas de tu propiedad.
          </p>
          <ul>
            <li>✅ Valoración de mercado precisa</li>
            <li>✅ Marketing digital y tradicional</li>
            <li>✅ Negociación profesional</li>
            <li>✅ Gestión de documentación legal</li>
          </ul>
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
              <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </p>
          <h3>Gestion de Alquileres</h3>
          <p className="parrafo">
            manejamos todo el proceso de alquiler, desde la busqueda de
            inquilinos hasta el mantenimiento.
          </p>
          <ul>
            <li>✅ Selección rigurosa de inquilinos</li>
            <li>✅ Contratos de arrendamiento personalizados</li>
            <li>✅ Mantenimiento y reparaciones</li>
            <li>✅ Cobro de rentas y reportes mensuales</li>
          </ul>
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
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
          </p>
          <h3>Asesoria Legal</h3>
          <p className="parrafo">
            Proporcionamos asesoramiento legal en todas las etapas de la compra,
            venta o alquiler de propiedades.
          </p>
          <ul>
            <li>✅ Inspección detallada de la propiedad</li>
            <li>✅ Comparativa con propiedades similares</li>
            <li>✅ Consideración de factores locales y económicos</li>
            <li>✅ Informe de tasación profesional</li>
          </ul>
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
              <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z" />
            </svg>
          </p>
          <h3>Gestion de Propiedades</h3>
          <p className="parrafo">
            Cuidamos de tu inversion, gestionando el mantenimiento y las
            relaciones con los inquilinos.
          </p>
          <ul>
            <li>✅ Supervisión y mantenimiento regula</li>
            <li>✅ Atención a inquilinos 24/7</li>
            <li>✅ Gestión financiera y contable</li>
            <li>✅ Informes periódicos de rendimiento</li>
          </ul>
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
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
          </p>
          <h3>Tramites Hipotecarios</h3>
          <p className="parrafo">
            Te ayudamos a obtener la mayor hipoteca, gestionando todo el papeleo
            necesario.
          </p>
          <ul>
            <li>✅ Análisis de mercado y tendencias</li>
            <li>✅ Identificación de oportunidades de inversión</li>
            <li>✅ Proyecciones financieras detalladas</li>
            <li>✅ Asesoría en diversificación de portafolio</li>
          </ul>
        </div>
      </section>
    </>
  );
};
