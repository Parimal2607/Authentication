import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import FullLayout from "../layouts/FullLayout";

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
