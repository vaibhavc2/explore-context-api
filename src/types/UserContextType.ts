import { Dispatch, SetStateAction } from "react";
import { UserType } from ".";

interface UserContextType {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}

export type { UserContextType };
