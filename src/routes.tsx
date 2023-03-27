import Div from "./assets/styles/Div";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import Theme from "./assets/styles/themes";
import AppContext from "./context/AppContext";
import StepContext from "./context/StepContext";
import SelectPlan from "./pages/SelectPlan/SelectPlan";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import type { IPlan, IUserInfo, Steps } from "./context/types";

export default function AppRoutes() {
  const userState = useState<IUserInfo>({
    name: "",
    email: "",
    tel: "",
  });
  const stepState = useState<Steps>(1);
  const planState = useState<IPlan>({ plan: "Arcade", paymentMethod: "mo" });

  return (
    <StepContext.Provider value={{ stepState }}>
      <AppContext.Provider value={{ userState, planState }}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <Div>
              <Routes>
                <Route path="/" element={<PersonalInfo />} />
                <Route path="/plan" element={<SelectPlan />} />
              </Routes>
            </Div>
          </ThemeProvider>
        </BrowserRouter>
      </AppContext.Provider>
    </StepContext.Provider>
  );
}
