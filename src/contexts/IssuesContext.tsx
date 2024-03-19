import { useEffect, useState, useCallback, createContext } from "react";
import { api } from "../lib/axios";

export interface IssueHeader {
  issueNumber: number;
  url: string;
  title: string;
  created_at: string;
  body: string;
}

interface IssuesContextData {
  issues: IssueHeader[];
  fetchIssues: (query?: string) => Promise<void>;
}

export const IssuesContext = createContext({} as IssuesContextData);

interface IssuesProviderProps {
  children: React.ReactNode;
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const ghAccessToken = import.meta.env.VITE_GITHUB_TOKEN;
  const [issues, setIssues] = useState<IssueHeader[]>([]);

  //The useCallback hook is used to prevent the function from being recreated every time the component is rendered
  // it has a dependency array as the second argument, which means that the function will only be recreated if the dependencies change
  const fetchIssues = useCallback(async (query?: string) => {
    const repoRef = ` is:issue repo:rocketseat-education/reactjs-github-blog-challenge`;
    const response = ghAccessToken
      ? api.get(`/search/issues`, {
          params: {
            q: query ? query + repoRef : repoRef,
          },
          headers: {
            Authorization: `Bearer ${ghAccessToken}`,
          },
        })
      : api.get(`/search/issues`, {
          params: {
            q: query ? query + repoRef : repoRef,
          },
        });
    response
      .then((response) => {
        setIssues([
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...response.data.items.map((issue: any) => {
            return {
              ...issue,
              issueNumber: issue.number,
            };
          }),
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ghAccessToken]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}
