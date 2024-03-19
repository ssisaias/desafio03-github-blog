import { IssueHeaderCard, IssueHeaderContainer } from "./styles";
import {
  Calendar,
  GithubLogo,
  ChatDots,
  ArrowArcLeft,
  ArrowSquareOut,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { IssueDetailPageProps } from "../index";

interface IssueHeaderProps {
  issueData: IssueDetailPageProps | undefined
}

export function IssueHeader(props: IssueHeaderProps) {
  const theme = useTheme();
  const timeDiff = Math.abs(new Date().getTime() - new Date(props?.issueData?.created_at ?? new Date()).getTime());
  const daysAgo = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  return (
    <IssueHeaderContainer>
      <IssueHeaderCard>
        <header>
          <Link to="/">
            <ArrowArcLeft></ArrowArcLeft>Go Back
          </Link>
          <Link to={props?.issueData?.html_url || "#"} title="View issue">
            View in github <ArrowSquareOut></ArrowSquareOut>
          </Link>
        </header>
        <article>
          <h2>{props?.issueData?.title}</h2>
        </article>
        <footer>
          <div>
            <GithubLogo size={18} weight="fill" color={theme["base-text"]} />
            <span>{props?.issueData?.user.login}</span>
          </div>
          <div>
            <Calendar size={18} weight="fill" color={theme["base-text"]} />
            <span> {new Intl.RelativeTimeFormat().format(-daysAgo, 'day')}</span>
          </div>
          <div>
            <ChatDots size={18} weight="fill" color={theme["base-text"]} />
            <span>{props?.issueData?.comments} comentário(s)</span>
          </div>
        </footer>
      </IssueHeaderCard>
    </IssueHeaderContainer>
  );
}
