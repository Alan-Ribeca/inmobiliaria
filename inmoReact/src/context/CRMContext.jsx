/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const CRMContext = React.createContext([{}, () => {}]);

const CRMProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || "",
    auth: false,
    email: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAuth({
          token,
          auth: true,
          email: decodedToken.email,
        });
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        setAuth({
          token: "",
          auth: false,
          email: null,
        });
      }
    } else {
      setAuth({
        token: "",
        auth: false,
        email: null,
      });
    }
  }, [localStorage.getItem("token")]);

  const setAuthToken = (token) => {
    if (typeof token === "string" && token.trim() !== "") {
      try {
        const decodedToken = jwtDecode(token);
        localStorage.setItem("token", token);
        setAuth({
          token,
          auth: true,
          email: decodedToken.email,
        });
      } catch (error) {
        console.error(error);
        setAuth({
          token: "",
          auth: false,
          email: null,
        });
      }
    } else {
      // Si el token no es válido o no existe, limpiamos el auth state
      localStorage.removeItem("token");
      setAuth({
        token: "",
        auth: false,
        email: null,
      });
    }
  };

  return (
    <CRMContext.Provider value={[auth, setAuthToken]}>
      {children}
    </CRMContext.Provider>
  );
};

export { CRMContext, CRMProvider };
