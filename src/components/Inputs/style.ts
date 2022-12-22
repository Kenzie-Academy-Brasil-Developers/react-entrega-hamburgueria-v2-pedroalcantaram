import styled from "styled-components";

export const StyledInput = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  color: var(--gray-100);

  input {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: 2px solid var(--gray-0);
    border-radius: 8px;
    background-color: var(--gray-0);
    font-size: 16px;
    font-weight: 400;
    color: var(--gray-100);
    outline: none;
  }
`;
