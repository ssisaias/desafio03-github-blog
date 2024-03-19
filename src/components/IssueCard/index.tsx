import { Link } from "react-router-dom";
import { IssueCardContainer } from "./styles";
import Markdown from "react-markdown";

interface issueCardProps{
  issueNumber: number;
  url: string;
  title: string;
  created_at: string;
  body: string;
}

export function IssueCard(props: issueCardProps) {
  const timeDiff = Math.abs(new Date().getTime() - new Date(props.created_at).getTime());
  const daysAgo = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <IssueCardContainer>
      <header>
        <Link to={`/issue/${props.issueNumber}`} title={props.title}>
          <h2>{props.title}</h2>  
        </Link>
        <span>
          {new Intl.RelativeTimeFormat().format(-daysAgo, 'day')}
        </span>
      </header>

      {props.body && <Markdown>{props.body.substring(0, 300)}</Markdown>}
      
    </IssueCardContainer>
  );
}