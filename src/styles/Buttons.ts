import styled, { css } from "styled-components";

interface iButtonProps {
  buttonStyle: string;
  buttonSize: string;
}

export const ThemeButton = styled.button<iButtonProps>`
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  //Styles
  ${(props) => {
    switch (props.buttonStyle) {
      case "solid":
        return css`
          color: var(--gray-0);
          background-color: var(--Color-primary);
          border: 1px solid var(--Color-primary);
          &:hover {
            background-color: var(--Color-primary-50);
            border: 1px solid var(--Color-primary-50);
          }
        `;

      case "outline":
        return css`
          color: var(--gray-50);
          background-color: var(--gray-20);
          border: 1px solid var(--gray-20);
          &:hover {
            background-color: var(--gray-50);
            color: var(--gray-20);
          }
        `;

      default:
        return false;
    }
  }}

  //Sizes
  ${(props) => {
    switch (props.buttonSize) {
      case "lg":
        return css`
          height: 60px;
          padding: 0 2rem;
        `;
      case "sm":
        return css`
          height: 40px;
          padding: 0 1rem;
        `;

      default:
        return false;
    }
  }}
`;
