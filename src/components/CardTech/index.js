import styled from "styled-components";

export const CardTech = styled.li`
  display: flex;
  width: 100%;
  background-color: var(--grey4);
  padding: 13px 22px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: var(--grey2);
    cursor: pointer;
  }
`;

export const DivCardTech = styled.div`
  display: flex;
  gap: 25.3px;
  align-items: center;

  button {
    align-items: center;
    align-self: self-end;
  }

  .ri-delete {
    color: var(--white);
    align-self: center;

    :hover {
      color: var(--grey1);
    }
  }
`;
