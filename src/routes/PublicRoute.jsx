import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import FullLayout from "../layouts/FullLayout";

const PublicRoute = ({ children, fullLayout }) => {
  return fullLayout ? (
    <FullLayout>{children}</FullLayout>
  ) : (
    <AdminLayout>{children}</AdminLayout>
  );
};

export default PublicRoute;
