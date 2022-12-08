import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;

  h1 {
    color: var(--color-primary);
    font-size: 22px;
    font-weight: 600;
    line-height: 20px;
  }
`;
