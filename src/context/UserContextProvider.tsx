import { ReactNode, useState } from "react";
import UserContext from "./UserContext";

import { UserContextType, UserType } from "../types";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>({
    username: "",
    password: ""
  });

  return (
    <UserContext.Provider value={{ user, setUser } as UserContextType}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
