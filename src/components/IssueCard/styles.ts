import styled from "styled-components";

export const IssueCardContainer = styled.div`
  max-width: 100%;
  max-height: 260px;
  margin-top: 1rem;
  background: ${(props) => props.theme["base-profile"]};;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.2rem;
      font-weight: 600;

      &:visited {
          color: ${(props) => props.theme["base-title"]};
      }

      &:hover {
          color: ${(props) => props.theme["blue"]};
          transition: 0.2s;
      }
    }
  }

  p {
    line-height: 1.2rem;
    color: ${(props) => props.theme["text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`