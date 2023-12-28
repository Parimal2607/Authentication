import { Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  let authenticated;
  let login = localStorage.getItem("userData");
  if (login) {
    authenticated = JSON.parse(login);
  }

  if (authenticated && window.location.pathname === "/login") {
    navigate("/dashboard");
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
