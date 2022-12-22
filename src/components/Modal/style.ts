import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(18, 18, 20, 0.5);

  justify-content: center;
  align-items: center;

  .modalContainer {
    gap: 20px;
    border-radius: 4px;
    padding: 20px;
    width: 400px;
    height: 400px;
    background-color: var(--gray-3);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
