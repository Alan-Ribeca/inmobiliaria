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
        console.log(error);
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
    localStorage.setItem("token", token);
    setAuth({
      token,
      auth: true,
      email: jwtDecode(token).email,
    });
  };
  return (
    <CRMContext.Provider value={[auth, setAuthToken]}>
      {children}
    </CRMContext.Provider>
  );
};

export { CRMContext, CRMProvider };
