import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>

      <Route
        path="/dashboard"
        element={<DashboardPage></DashboardPage>}
      ></Route>
      <Route path="*" element={<Navigate to="/register"></Navigate>}></Route>
    </Routes>
  );
};
