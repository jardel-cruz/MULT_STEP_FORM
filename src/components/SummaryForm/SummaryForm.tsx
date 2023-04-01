import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import themes from "../../assets/styles/themes";
import AppContext from "../../context/AppContext";
import StepContext from "../../context/StepContext";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Text from "../Text/Text";
import Title from "../Title/Title";
import {
  ContainerAddOns,
  ContainerTitle,
  SummaryContainer,
  SummaryTitle,
  TotalContainer,
} from "./SummaryForm_style";

import plans from "../../data/plans.json";

export default function SummaryForm() {
  const navigate = useNavigate();
  const [_, setStep] = useContext(StepContext).stepState;
  const [{ plan, paymentMethod, addOns }] = useContext(AppContext).planState;
  const [user] = useContext(AppContext).userState;
  const paymentMethodYr = paymentMethod === "yr";
  const price = plans.find((item) => item.name === plan)?.price[
    paymentMethod as "mo" | "yr"
  ]!;

  const listAddOns = [
    {
      name: "Online server",
      price: { mo: 1, yr: 10 },
      select: addOns.OnlineService,
    },
    {
      name: "Larger storage",
      price: { mo: 2, yr: 20 },
      select: addOns.LargerStorage,
    },
    {
      name: "Customizable profile",
      price: { mo: 2, yr: 20 },
      select: addOns.CustomizableProfile,
    },
  ];

  const total = () => {
    const addOnsPrice = listAddOns.reduce((acc, { price, select }) => {
      if (select) {
        return acc + price[paymentMethod as "mo" | "yr"];
      }

      return acc;
    }, 0);
    const result = price + addOnsPrice;

    return result;
  };

  useEffect(() => setStep(4));

  const margin = (() => {
    const countAddOns = listAddOns.filter((item) => item.select).length as
      | 0
      | 1
      | 2
      | 3;
    const marginValues = {
      0: "13.6rem",
      1: "10.45rem",
      2: "8.5rem",
      3: "6.15rem",
    };
    return marginValues[countAddOns];
  })();

  return (
    <Form>
      <Title>Finishing up</Title>
      <Text>Double-check everything looks OK before confirming.</Text>
      <SummaryContainer>
        <ContainerTitle>
          <div>
            <SummaryTitle>{`${plan}(${
              paymentMethodYr ? "Yearly" : "Monthly"
            })`}</SummaryTitle>
            <Link to={"/plan"}>Change</Link>
          </div>
          <p>{`$${price}/${paymentMethod}`}</p>
        </ContainerTitle>
        <ContainerAddOns>
          <>
            {listAddOns.map(({ name, price, select }, index) => {
              if (select) {
                return (
                  <div key={index}>
                    <p>{name}</p>
                    <span>{`+$${
                      price[paymentMethod as "mo" | "yr"]
                    }/${paymentMethod}`}</span>
                  </div>
                );
              }
            })}
          </>
        </ContainerAddOns>
      </SummaryContainer>
      <TotalContainer>
        <p>{`Total (per ${paymentMethodYr ? "year" : "month"})`}</p>
        <span>{`$${total()}/${paymentMethod}`}</span>
      </TotalContainer>
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
        backgroundColor={themes.colors.border}
        houverColor={themes.colors.buttonHover2}
        color="#fff"
        onClick={() => {
          console.log(plan, paymentMethod, addOns, user);
          navigate("/end");
        }}
      >
        Confirm
      </Button>
    </Form>
  );
}
