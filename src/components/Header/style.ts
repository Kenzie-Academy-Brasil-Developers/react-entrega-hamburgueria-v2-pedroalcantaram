import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--gray-0);

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 350px;
    & div {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
    }
    @media (min-width: 1024px) {
      gap: 20px;
      flex-direction: row;
    }
  }

  & > div {
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0 10px;
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    color: var(--gray-100);
    outline: none;
  }

  .inputGroup {
    width: 100%;
    max-width: 380px;
    position: relative;
  }

  .searchButton {
    position: absolute;
    right: 10px;
    top: 4px;
  }

  .cartButton {
    width: max-content;
    height: max-content;
    & svg {
      width: 25px;
      height: 25px;
    }
  }
`;
