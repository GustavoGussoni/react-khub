import styled from "styled-components";

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 370px;
  margin-top: 35px;
  background-color: var(--grey3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 50px;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  h1 {
    color: var(--color-primary);
    font-size: 22px;
    font-weight: 600;
    line-height: 20px;
  }
`;
