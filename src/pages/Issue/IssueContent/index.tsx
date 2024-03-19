import Markdown from "react-markdown";
import { ContentContainer } from "./styles";

interface IssueContentProps {
  content: string | undefined;
}

export function IssueContent({ content }: IssueContentProps) {
  return (
    <ContentContainer>
      <Markdown>
        {content}
      </Markdown>
    </ContentContainer>
  );
}