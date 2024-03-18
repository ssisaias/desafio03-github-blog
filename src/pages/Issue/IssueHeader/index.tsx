import { IssueHeaderCard, IssueHeaderContainer } from "./styles";
import {
  Calendar,
  Balloon,
  Buildings,
  GithubLogo,
  Users,
  ChatDots,
  ArrowArcLeft,
  ArrowSquareOut,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export function IssueHeader() {
  const theme = useTheme();

  return (
    <IssueHeaderContainer>
      <IssueHeaderCard>
        <header>
          <Link to="/"><ArrowArcLeft></ArrowArcLeft>Go Back</Link>
          <Link to="https://github.com/ssisaias">View in github <ArrowSquareOut></ArrowSquareOut></Link>
        </header>
        <article>
          <h2>Isaias Silvolas</h2>
        </article>
        <footer>
          <div>
            <GithubLogo size={18} weight="fill" color={theme["base-text"]} />
            <span>ssisaias</span>
          </div>
          <div>
            <Calendar size={18} weight="fill" color={theme["base-text"]} />
            <span>ssisaias</span>
          </div>
          <div>
            <ChatDots size={18} weight="fill" color={theme["base-text"]} />
            <span>ssisaias</span>
          </div>
        </footer>
      </IssueHeaderCard>
    </IssueHeaderContainer>
  );
}
