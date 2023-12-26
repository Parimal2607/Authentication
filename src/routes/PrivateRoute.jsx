import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import FullLayout from "../layouts/FullLayout";

/**
 * Render a private route based on authentication status.
 *
 * @param {object} children - The child components to be rendered.
 * @param {boolean} fullLayout - Whether to render the full layout.
 * @return {JSX.Element} The rendered component based on authentication status.
 */
const PrivateRoute = ({ children, fullLayout }) => {
  let authenticated;
  let login = localStorage.getItem("userData");
  if (login) {
    authenticated = JSON.parse(login);
  }
  //
  return authenticated ? (
    fullLayout ? (
      <FullLayout>{children}</FullLayout>
    ) : (
      <AdminLayout>{children}</AdminLayout>
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
