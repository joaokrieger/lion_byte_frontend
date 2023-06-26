import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    // Verifica se o usuário está logado
    const id_usuario = localStorage.getItem("id_usuario");
    const isLoggedIn = id_usuario !== null && id_usuario !== "0";
    setIsAuthenticated(isLoggedIn);
  
    // Verifica se o usuário é um administrador
    const is_admin = localStorage.getItem("is_admin") === "true";
    setIsAdmin(is_admin);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
