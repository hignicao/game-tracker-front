import { createContext, useState, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type UserContextType = {
  userData: any; // replace "any" with the appropriate type for userData
  setUserData: (data: any) => void; // replace "any" with the appropriate type for userData
};

export const UserContext = createContext<UserContextType>({
  userData: undefined,
  setUserData: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useLocalStorage("userData", undefined);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
