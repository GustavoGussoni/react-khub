import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root {
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-nagative: #59323f;
   
    --sucess: #3fe864;
    --negative: #e83f5b;

    --white: #fff;

    --grey0: #f8f9fa;
    --grey1: #868e96;
    --grey2: #343b41;
    --grey3: #212529;
    --grey4: #121214;
    
}


button {
    cursor: pointer;
    border: 0;
    background: transparent
}

ul, ol, li {
    list-style: none;
}

img {
    max-width: 100%;
}

section, aside, div {
    display:flex;    
    align-items: center;
    justify-content: center;
}


`;

export const Container = styled.div`
  max-width: 370px;
  max-width: 100%;
  min-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  flex-direction: column;
`;
