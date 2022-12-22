import styled from "styled-components";

export const StyledCart = styled.aside`
  width: 100%;
  max-width: 380px;
  height: 500px;
  max-height: 500px;
  border-radius: 5px;

  .headerCart {
    background-color: var(--Color-primary);
    padding: 20px;
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .displayCart {
    display: flex;
    flex-direction: column;
    background-color: var(--gray-0);
    padding: 20px;
    width: 100%;
    height: 300px;
    max-height: 300px;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    border-radius: 0 0 5px 5px;
  }

  .totalContainer {
    background-color: var(--gray-0);
    padding: 20px;
    border-top: 1px solid var(--gray-20);
    width: 100%;
  }

  .totalInfo {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;
