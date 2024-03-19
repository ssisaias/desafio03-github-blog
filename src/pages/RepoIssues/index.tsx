import { Header } from "../../components/Header";
import { Summary } from "../../components/ProfileSummary";
import { SearchForm } from "./components/SearchForm";
import { CardListGridContainer, IssuesContainer } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";
import { IssueCard } from "../../components/IssueCard";
import { useContext } from "react";

export interface issueProps {
  issueNumber: number;
  url: string;
  title: string;
  created_at: string;
  body: string;
}

export function RepoIssues() {
  const { issues } = useContext(IssuesContext);

  return (
    <div>
      <Header />
      <Summary />
      <IssuesContainer>
        {issues && <SearchForm />}
        <CardListGridContainer>
          {issues &&
            issues.map((issue: issueProps) => (
              <IssueCard
                key={issue.issueNumber}
                issueNumber={issue.issueNumber}
                url={issue.url}
                title={issue.title}
                created_at={issue.created_at}
                body={issue.body}
              />
            ))}
        </CardListGridContainer>
      </IssuesContainer>
    </div>
  );
}
