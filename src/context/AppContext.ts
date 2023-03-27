import { createContext } from "react";
import type { IPlan, IUserInfo } from "./types";

interface AppContextInterface {
  userState: [IUserInfo, React.Dispatch<React.SetStateAction<IUserInfo>>];
  planState: [IPlan, React.Dispatch<React.SetStateAction<IPlan>>];
}

const AppContext = createContext({} as AppContextInterface);

export default AppContext;
