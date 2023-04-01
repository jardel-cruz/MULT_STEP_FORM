import { createContext } from "react";
import type { Action, IPlan, IUserInfo } from "./types";

interface AppContextInterface {
  userState: [IUserInfo, React.Dispatch<React.SetStateAction<IUserInfo>>];
  planState: [IPlan, React.Dispatch<Action>];
}

const AppContext = createContext({} as AppContextInterface);

export default AppContext;
