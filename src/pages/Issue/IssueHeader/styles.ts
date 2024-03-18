import styled from "styled-components";

export const IssueHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IssueHeaderCard = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 6px;
  padding: 2rem;
  width: 60%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    a {
      text-decoration: none;

      &:visited {
        color: ${(props) => props.theme["base-span"]};
      }
      &:hover {
        color: ${(props) => props.theme["blue"]};
      }
    }
  }

  article {
    h2 {
      font: 700 24px "Nunito";
      color: ${(props) => props.theme["base-title"]};
    }
    p {
      position: relative;
      color: ${(props) => props.theme["base-text"]};
      font-weight: 400;
    }
  }

  footer {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 0.5rem;
    width: 100%;
    max-width: 100%;
    gap: 1rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme["base-subtitle"]};

    div {
      display: contents;
      span {
        font-size: 16px;
      }
    }
  }
`;
