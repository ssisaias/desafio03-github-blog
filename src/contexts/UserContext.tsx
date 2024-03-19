import { useEffect, useState, useCallback, createContext } from "react";
import { api } from "../lib/axios";

export interface UserData {
  login: string | undefined;
  id: number | undefined;
  node_id: string | undefined;
  avatar_url: string | undefined;
  gravatar_id: string | undefined;
  url: string;
  html_url: string | undefined;
  followers_url: string | undefined;
  following_url: string | undefined;
  gists_url: string | undefined;
  starred_url: string | undefined;
  subscriptions_url: string | undefined;
  organizations_url: string | undefined;
  repos_url: string | undefined;
  events_url: string | undefined;
  received_events_url: string | undefined;
  type: string | undefined;
  site_admin: string | undefined;
  name: string | undefined;
  company: string | undefined;
  blog: string | undefined;
  location: string | undefined;
  email: string | undefined;
  hireable: string | undefined;
  bio: string | undefined;
  twitter_username: string | undefined;
  public_repos: number | undefined;
  public_gists: number | undefined;
  followers: number | undefined;
  following: number | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}

interface UserContextData {
  userData: UserData;
  fetchUserData: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextData);

interface UserDataProviderProps {
  children: React.ReactNode;
}

export function UserDataProvider({ children }: UserDataProviderProps) {
  const ghAccessToken = import.meta.env.VITE_GITHUB_TOKEN;

  const [userData, setUserData] = useState<UserData>({} as UserData);
  const fetchUserData = useCallback(async () => {
    const response = ghAccessToken
      ? api.get(`/users/ssisaias`, {
          headers: {
            Authorization: `Bearer ${ghAccessToken}`,
          },
        })
      : api.get(`/users/ssisaias`);
    response
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ghAccessToken]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}
