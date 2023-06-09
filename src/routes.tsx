import Div from "./assets/styles/Div";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import Theme from "./assets/styles/themes";
import AppContext from "./context/AppContext";
import StepContext from "./context/StepContext";
import SelectPlan from "./pages/SelectPlan/SelectPlan";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer, useState } from "react";

import type { IPlan, IUserInfo, Steps, Action } from "./context/types";
import AddOns from "./pages/AddOns/AddOns";
import Summary from "./pages/Summary/Summary";
import End from "./pages/End/End";
import { reducer } from "./utils/reducer";

export default function AppRoutes() {
  const planState = useReducer(reducer, {
    plan: "Arcade",
    paymentMethod: "mo",
    addOns: {
      CustomizableProfile: false,
      LargerStorage: false,
      OnlineService: false,
    },
  });

  const userState = useState<IUserInfo>({
    name: "",
    email: "",
    tel: "",
  });
  const stepState = useState<Steps>(1);

  return (
    <StepContext.Provider value={{ stepState }}>
      <AppContext.Provider value={{ userState, planState }}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <Div>
              <Routes>
                <Route path="/" element={<PersonalInfo />} />
                <Route path="/plan" element={<SelectPlan />} />
                <Route path="/add-ons" element={<AddOns />}></Route>
                <Route path="/summary" element={<Summary />}></Route>
                <Route path="/end" element={<End />}></Route>
              </Routes>
            </Div>
          </ThemeProvider>
        </BrowserRouter>
      </AppContext.Provider>
    </StepContext.Provider>
  );
}
