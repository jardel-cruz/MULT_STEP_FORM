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
import { useContext, useEffect } from "react";
import ButtonOnOf from "../ButtonOnOf/ButtonOnOf";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import themes from "../../assets/styles/themes";
import AppContext from "../../context/AppContext";

import plans from "../../data/plans.json";

export default function SelectPlanForm() {
  const [_, setStep] = useContext(StepContext).stepState;
  const [planState, dispatch] = useContext(AppContext).planState;
  const yearMod = planState.paymentMethod === "yr";

  const setMod = () => dispatch({ type: "SetPaymentMethod" });
  const navigate = useNavigate();

  useEffect(() => {
    if (yearMod && planState.paymentMethod !== "yr") setMod();
    setStep(2);
  });
  useEffect(() => {});

  return (
    <Form>
      <div>
        <Title>Select your plan</Title>
        <Text>You have option monthly or yearly billing</Text>
        <CardsContainer>
          {plans.map(({ name, price }, index) => (
            <PlanOption
              title={name}
              price={price[planState.paymentMethod as "mo" | "yr"]}
              key={index}
              yearMod={yearMod}
            />
          ))}
        </CardsContainer>

        <SelectPaymentMethodContainer>
          <TextPaymentMethod active={!yearMod}>Monthly</TextPaymentMethod>
          <ButtonOnOf onClick={setMod} state={yearMod}></ButtonOnOf>
          <TextPaymentMethod active={yearMod}>Yearly</TextPaymentMethod>
        </SelectPaymentMethodContainer>
      </div>

      <div>
        <Button floatPosition="left" color="grey" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button
          floatPosition="right"
          backgroundColor={themes.colors.button}
          houverColor={themes.colors.buttonHover1}
          color="#fff"
          onClick={() => navigate("/add-ons")}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
}
