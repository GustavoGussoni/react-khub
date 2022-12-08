import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 42px 22px;
  width: 100%;

  label {
    align-self: flex-start;
  }

  select {
    background: var(--grey2);
    border: 1.22px solid var(--grey2);
    padding: 0px 16.24px;
    min-width: 100%;
    height: 48px;
    border-radius: 4px;
    color: var(--grey0);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }

  select:hover {
    border: 1.22px solid var(--grey0);
  }

  span {
    color: var(--negative);
  }
`;

export const DivHeadForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
