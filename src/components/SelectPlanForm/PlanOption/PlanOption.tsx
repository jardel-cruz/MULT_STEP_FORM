import AppContext from "../../../context/AppContext";
import Text from "../../Text/Text";
import Title from "../../Title/Title";
import { useContext, useEffect } from "react";
import { PlanCard } from "./PlanOption_style";

import type { IPlan } from "../../../context/types";

interface PlanOptionProps {
  title: string;
  price: number;
  yearMod: boolean;
}

export default function PlanOption({ price, title, yearMod }: PlanOptionProps) {
  const [planState, dispatch] = useContext(AppContext).planState;

  return (
    <PlanCard
      icon={title}
      selected={planState.plan === title}
      yearMod={yearMod}
      onClick={() =>
        dispatch({ type: `SetPlan${title as "Arcade" | "Advanced" | "Pro"}` })
      }
    >
      <p className="monthFree">2 months free</p>
      <Text>{`$${price}/${yearMod ? "yr" : "mo"}`}</Text>
      <Title>{title}</Title>
      <span></span>
    </PlanCard>
  );
}
