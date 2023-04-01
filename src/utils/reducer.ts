import type { IPlan, Action } from "../context/types";

export const reducer: React.Reducer<IPlan, Action> = (state, action) => {
  switch (action.type) {
    case "SetPlanArcade":
      return { ...state, plan: "Arcade" };

    case "SetPlanAdvanced":
      return { ...state, plan: "Advanced" };

    case "SetPlanPro":
      return { ...state, plan: "Pro" };

    case "SetPaymentMethod":
      return {
        ...state,
        paymentMethod: state.paymentMethod === "mo" ? "yr" : "mo",
      };

    case "SetOnlineService":
      return {
        ...state,
        addOns: {
          ...state.addOns,
          OnlineService: true,
        },
      };

    case "SetCustomizableProfile":
      return {
        ...state,
        addOns: {
          ...state.addOns,
          CustomizableProfile: true,
        },
      };

    case "SetLargerStorage":
      return {
        ...state,
        addOns: {
          ...state.addOns,
          LargerStorage: true,
        },
      };

    default:
      return state;
  }
};
