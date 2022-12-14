import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 118px;
  gap: 10px;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  justify-content: space-between;
  @media (min-width: 800px) {
    margin-top: 18px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 23px;
  }
`;

export const DivList = styled.ul`
  width: 100%;
  background-color: var(--grey3);
  padding: 23px 22px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 4px;

  @media (min-width: 800px) {
  }
`;
