import { CompFormLogin } from "../../components/Form/Login";

import { Container } from "../../styles/global";

import { DivLogin, DivLogo } from "./style";

export const LoginPage = ({ setLoginData }) => {
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
