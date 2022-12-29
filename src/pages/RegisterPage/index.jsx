import { Navigate, useNavigate } from "react-router-dom";
import { CompFormRegister } from "../../components/Form/Register";
import { CompHeader } from "../../components/Header";
import { DivContainer, DivRegister } from "./style";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  const token = localStorage.getItem("authToken");
  if (token) return <Navigate to="/dashboard" replace />;
  return (
    <DivContainer>
      <CompHeader text="Voltar" onClick={onClick}></CompHeader>
      <DivRegister>
        <CompFormRegister></CompFormRegister>
      </DivRegister>
    </DivContainer>
  );
};
