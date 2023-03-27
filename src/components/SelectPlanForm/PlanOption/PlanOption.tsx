import AppContext from "../../../context/AppContext";
import Text from "../../Text/Text";
import Title from "../../Title/Title";
import { useContext, useEffect } from "react";
import { PlanCard } from "./PlanOption_style";

import type { IPlan } from "../../../context/types";

interface PlanOptionProps {
  title: string;
  price: string;
  yearMod: boolean;
}

export default function PlanOption({ price, title, yearMod }: PlanOptionProps) {
  const [planObj, setPlan] = useContext(AppContext).planState;

  const paymentMethod = yearMod ? "yr" : "mo";

  useEffect(() => {
    if (yearMod && planObj.paymentMethod !== "yr")
      setPlan({ ...planObj, paymentMethod });
  });

  return (
    <PlanCard
      icon={title}
      selected={planObj.plan === title}
      yearMod={yearMod}
      onClick={() => setPlan({ plan: title, paymentMethod } as IPlan)}
    >
      <p className="monthFree">2 months free</p>
      <Text>{`$${price}${yearMod ? "0" : ""}/${yearMod ? "yr" : "mo"}`}</Text>
      <Title>{title}</Title>
      <span></span>
    </PlanCard>
  );
}
