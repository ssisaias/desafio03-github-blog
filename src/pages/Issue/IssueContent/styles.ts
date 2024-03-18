import styled from "styled-components";

export const ContentContainer = styled.div`
  background: ${(props) => props.theme["base-background"]};
  width: 60%;
  
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
  margin: 2rem auto;
  gap: 1rem;
`;
