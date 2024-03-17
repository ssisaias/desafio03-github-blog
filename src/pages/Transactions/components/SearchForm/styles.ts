import styled from "styled-components";

export const SearchFormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 18px;  
  h3 {
    color: ${(props) => props.theme["base-span"]};
  }
  color: ${(props) => props.theme["base-span"]};
`

export const SeachFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-label"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["base-span"]};
    color: ${(props) => props.theme["base-span"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["base-background"]};
      border: 1px solid ${(props) => props.theme["blue"]};
      color: ${(props) => props.theme["blue"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
