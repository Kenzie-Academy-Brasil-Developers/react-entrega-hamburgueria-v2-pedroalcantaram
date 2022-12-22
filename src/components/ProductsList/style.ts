import styled from "styled-components";

export const StyledProductsList = styled.div`
  height: 360px;
  width: 100%;
  overflow-y: auto;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    max-width: 1000px;
    height: max-content;
    flex-wrap: wrap;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (min-width: 1024px) {
      max-width: 1000px;
      height: max-content;
      flex-wrap: wrap;
    }
  }
`;
