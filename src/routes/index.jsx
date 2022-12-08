import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = ({ setLoginData, setUser, user }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage setLoginData={setLoginData}></LoginPage>}
      ></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route
        path="/dashboard"
        element={<DashboardPage user={user} setUser={setUser}></DashboardPage>}
      ></Route>
      <Route path="*" element={<Navigate to="/register"></Navigate>}></Route>
    </Routes>
  );
};
