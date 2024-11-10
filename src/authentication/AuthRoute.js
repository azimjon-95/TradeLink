import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const token = localStorage.getItem("access_token"); // Adjust based on where you store the token

  return token ? children : <Navigate to="/" />;
}

export default AuthRoute;
