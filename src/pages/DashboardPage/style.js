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

export const DivMessage = styled.div`
  display: none;

  @media (min-width: 800px) {
    margin-top: 37px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 23px;
  }
`;
