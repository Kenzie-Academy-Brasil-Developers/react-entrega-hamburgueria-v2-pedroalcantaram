import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root{
    --Color-primary: #27AE60;
    --Color-primary-50: #93D7AF;
    --Color-secondary: #EB5757;

    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;

    --Negative: #E60000;
    --Warning: #FFCD07;
    --Sucess: #168821;
    --Information: #155BCB;

    }


    button{
    cursor: pointer;
    border: none;
    background-color: transparent;
    }

    ul, ol, li{
    list-style: none;
    }

    img{
        max-width: 100%;
    }

    section, div, aside{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    body{
        background-color: #ffffff;
        font-family: 'Inter', sans-serif;
    }


    ::-webkit-input-placeholder  { 
        color: var(--gray-20);
        font-size: 16px;
        font-weight: 400;
    }

    ::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar {
        height: 6px;
        background: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: 1400px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
