import { Navigate } from "react-router-dom";
import { CompFormLogin } from "../../components/Form/Login";

import { Container } from "../../styles/global";

import { DivLogin, DivLogo } from "./style";

export const LoginPage = ({ setLoginData }) => {
  const token = localStorage.getItem("authToken");
  if (token) return <Navigate to="/dashboard" replace />;
  return (
    <Container>
      <DivLogo>
        <h1>Kenzie Hub</h1>
      </DivLogo>
      <DivLogin>
        <CompFormLogin setLoginData={setLoginData}></CompFormLogin>
      </DivLogin>
    </Container>
  );
};
