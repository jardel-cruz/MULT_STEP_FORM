import { createContext } from "react";
import type { Steps } from "./types";

interface StepContextInterface {
  stepState: [Steps, React.Dispatch<React.SetStateAction<Steps>>];
}

const StepContext = createContext({} as StepContextInterface);

export default StepContext;
