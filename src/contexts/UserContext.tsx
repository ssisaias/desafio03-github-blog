import { useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

export interface UserData {}

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
  console.log("ghAccessToken", ghAccessToken);

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
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
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
