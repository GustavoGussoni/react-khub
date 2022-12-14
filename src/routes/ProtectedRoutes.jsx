import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("authToken");

  if (!token) return <Navigate to="/" replace />;

  return <Outlet />;
};
