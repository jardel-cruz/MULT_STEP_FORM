import Form from "../Form/Form";
import Title from "../Title/Title";
import Text from "../Text/Text";
import StepContext from "../../context/StepContext";
import PlanOption from "./PlanOption/PlanOption";
import {
  CardsContainer,
  SelectPaymentMethodContainer,
  TextPaymentMethod,
} from "./SelectPlanForm_style";
import { useContext, useEffect, useState } from "react";
import ButtonOnOf from "../ButtonOnOf/ButtonOnOf";

export default function SelectPlanForm() {
  const [step, setStep] = useContext(StepContext).stepState;
  const [yearMod, setYearMod] = useState(false);
  const options = [
    { title: "Arcade", price: "9" },
    { title: "Advanced", price: "12" },
    { title: "Pro", price: "15" },
  ];

  const setMod = () => (yearMod ? setYearMod(false) : setYearMod(true));

  useEffect(() => setStep(2));

  return (
    <Form>
      <Title>Select your plan</Title>
      <Text>You have option monthly or yearly billing</Text>
      <CardsContainer>
        {options.map((option, index) => (
          <PlanOption {...option} key={index} yearMod={yearMod} />
        ))}
      </CardsContainer>

      <SelectPaymentMethodContainer>
        <TextPaymentMethod active={!yearMod}>Monthly</TextPaymentMethod>
        <ButtonOnOf onClick={setMod} state={yearMod}></ButtonOnOf>
        <TextPaymentMethod active={yearMod}>Yearly</TextPaymentMethod>
      </SelectPaymentMethodContainer>
    </Form>
  );
}
