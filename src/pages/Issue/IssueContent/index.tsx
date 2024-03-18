import Markdown from "react-markdown";
import { ContentContainer } from "./styles";

const content = `

  `

export function IssueContent() {
  return (
    <ContentContainer>
      <Markdown>
        {content}
      </Markdown>
    </ContentContainer>
  );
}
