import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueContent } from "./IssueContent";
import { IssueHeader } from "./IssueHeader";
import { api } from "../../lib/axios";

export interface IssueDetailPageProps {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  user: {
    login: string;
  };
  comments: number;
}

export function Issue() {
  const ghAccessToken: string = import.meta.env.VITE_GITHUB_TOKEN;
  const [issue, setIssue] = useState<IssueDetailPageProps>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const req = ghAccessToken
      ? api.get(
          `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
          {
            headers: {
              Authorization: `token ${ghAccessToken}`,
            },
          }
        )
      : api.get(
          `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
        );
    req
      .then((response) => {
        setIssue(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ghAccessToken, id]);

  return (
    <>
      <IssueHeader issueData={issue} />
      <IssueContent content={issue?.body} />
    </>
  );
}
