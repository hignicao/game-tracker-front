import { createContext, useState, ReactNode } from "react";

type UserContextType = {
  userData: any; // replace "any" with the appropriate type for userData
  setUserData: (data: any) => void; // replace "any" with the appropriate type for userData
};

export const UserContext = createContext<UserContextType>({
  userData: undefined,
  setUserData: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const item = window.localStorage.getItem("userData");
  const [userData, setUserData] = useState(() => {
    const storedData = item !== null ? JSON.parse(item) : undefined;
    return storedData;
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
