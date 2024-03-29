import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -5rem;

  a {
    display: flex;
    align-items:right;
    position: relative;
    left: 12rem;
    top: 2.3rem;

    height: 1.5rem;
    text-decoration: none;
    &:visited {
      color: ${(props) => props.theme["base-span"]};
    }
    &:hover {
      color: ${(props) => props.theme["blue"]};
    }
  }
`;

export const SummaryCard = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 6px;
  padding: 2rem;
  max-width: 80%;
  display: flex;

  header {
    img {
      width: 2rem;
      width: 148px;
      height: 148px;
      border-radius: 6px;
      margin-right: 1rem;
    }
  }

  div {
    article {
      h2 {
        font: 700 24px "Nunito";
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
  }
`;
