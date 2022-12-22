import styled from "styled-components";

export const StyledLoginPage = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 1024px) {
    max-width: 1400px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .divSpan {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    border: 1px solid var(--gray-20);
    border-radius: 5px;
    padding: 15px 20px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  }

  .divSpanBag {
    width: 60px;
    height: 60px;
    background-color: rgba(39, 174, 96, 0.1);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    & svg {
      color: var(--Color-primary);
    }
  }

  img {
    width: 300px;
  }

  .sectionInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  span {
    line-height: 20px;
  }

  .sectionForm {
    width: 100%;
    max-width: 500px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 20px;
    border: 1px solid var(--gray-0);
    border-radius: 5px;
    box-shadow: 1px 3px 10px 5px rgba(0, 0, 0, 0.3);
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 14px;
    }
  }
`;
