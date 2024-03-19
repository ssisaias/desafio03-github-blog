import { Link } from "react-router-dom";
import { IssueCardContainer } from "./styles";

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
        <Link to={`/issue/${props.issueNumber}`}>
          <h2>{props.title}</h2>  
        </Link>
        <span>
          {new Intl.RelativeTimeFormat().format(-daysAgo, 'day')}
        </span>
      </header>

      <p>{props.body}</p>
    </IssueCardContainer>
  );
}