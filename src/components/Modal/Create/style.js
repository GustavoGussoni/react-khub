import styled from "styled-components";

export const Modal = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  background: var(--grey3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 12px;
  max-width: 369px;

  .div-head-modal {
    background: var(--grey2);
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 9px 16px;

    button {
      color: var(--grey1);

      :hover {
        color: var(--grey0);
      }
    }
  }
`;

export const FormModalCreate = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-top: 24px; */
  gap: 21px;
  width: 100%;
  padding: 24px 16px 32px 16px;

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
    outline-color: none;
  }

  select:hover {
    border: 1.22px solid var(--grey0);
  }

  span {
    color: var(--negative);
  }
`;
