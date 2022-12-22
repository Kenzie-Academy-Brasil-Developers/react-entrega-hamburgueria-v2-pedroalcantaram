import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid var(--gray-20);
  border-radius: 5px;

  width: 300px;
  height: 350px;

  .imgInfo {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: var(--gray-0);
  }

  .cardInfo {
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding: 20px;
  }
`;
