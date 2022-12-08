import styled from "styled-components";

export const CompInput = styled.input`
  background: var(--grey2);
  border: 1.22px solid var(--grey2);
  padding: 0px 16.24px;
  min-width: 100%;
  height: 48px;
  border-radius: 4px;

  :hover {
    border: 1.22px solid var(--grey0);
  }

  ::placeholder {
    color: var(--grey0);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }

  :focus {
    color: var(--grey0);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    border: 1.22px solid var(--grey0);
  }
`;
