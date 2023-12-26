import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import FullLayout from "../layouts/FullLayout";

/**
 * Render a public route component.
 *
 * @param {Object} props - The props for the component.
 * @param {ReactNode} props.children - The children to render within the component.
 * @param {boolean} props.fullLayout - A flag indicating whether to use the full layout.
 * @return {ReactNode} The rendered component.
 */
const PublicRoute = ({ children, fullLayout }) => {
  return fullLayout ? (
    <FullLayout>{children}</FullLayout>
  ) : (
    <AdminLayout>{children}</AdminLayout>
  );
};

export default PublicRoute;
