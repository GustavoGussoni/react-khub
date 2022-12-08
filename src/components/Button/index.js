import styled from "styled-components";

export const BttPrimary = styled.button`
  height: 48px;
  border-radius: 4px;
  border: 1.22px solid var(${(props) => props.borderColor});
  background: var(${(props) => props.color});
  color: var(${(props) => props.fontColor});
  width: 100%;

  :hover {
    background: var(${(props) => props.colorBg});
    border: 1.22px solid var(${(props) => props.colorBg});
  }
  .spinner-icon {
    animation: spin infinite 5s linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const BttSecondary = styled.button`
  height: 32px;
  padding: 0 16.24px;
  background: var(${(props) => props.color});
  color: var(${(props) => props.fontColor});
  border: none;
  border-radius: 4px;

  :hover {
    background: var(${(props) => props.colorBg});
  }
`;
