import { createContext } from "react";
import { UserContextType } from "../types";

const obj = {};
const UserContext = createContext(obj as UserContextType);

export default UserContext;
