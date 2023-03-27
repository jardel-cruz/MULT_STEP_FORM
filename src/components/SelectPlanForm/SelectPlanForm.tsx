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
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import themes from "../../assets/styles/themes";
import AppContext from "../../context/AppContext";

export default function SelectPlanForm() {
  const [_, setStep] = useContext(StepContext).stepState;
  const [planObj, setPlan] = useContext(AppContext).planState;
  const yearMod = planObj.paymentMethod === "yr";
  const options = [
    { title: "Arcade", price: "9" },
    { title: "Advanced", price: "12" },
    { title: "Pro", price: "15" },
  ];

  const setMod = () =>
    yearMod
      ? setPlan({ ...planObj, paymentMethod: "mo" })
      : setPlan({ ...planObj, paymentMethod: "yr" });
  const navigate = useNavigate();
  const margin = yearMod ? "7.7rem" : "9.4rem";

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

      <Button
        marginTop={margin}
        floatPosition="left"
        color="grey"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Button
        marginTop={margin}
        floatPosition="right"
        backgroundColor={themes.colors.button}
        houverColor={themes.colors.buttonHover1}
        color="#fff"
        onClick={() => navigate("/add-ons")}
      >
        Next Step
      </Button>
    </Form>
  );
}
