import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 42px 22px;
  width: 100%;

  label {
    align-self: flex-start;
  }

  span {
    color: var(--negative);
  }
`;

export const DivCreate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
