import Form from "../Form/Form";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { useContext, useEffect } from "react";
import StepContext from "../../context/StepContext";
import AppContext from "../../context/AppContext";
import AddOnOption from "./AddOnOption/AddOnOption";
import Button from "../Button/Button";
import themes from "../../assets/styles/themes";
import { useNavigate } from "react-router-dom";

import addOns from "../../data/addons.json";

type AddOnsIndex = "OnlineService" | "LargerStorage" | "CustomizableProfile";

export default function AddOnsForm() {
  const [_, setStep] = useContext(StepContext).stepState;
  const [planState, dispatch] = useContext(AppContext).planState;

  const navigate = useNavigate();

  useEffect(() => setStep(3), []);

  return (
    <Form>
      <div>
        <Title>Pick add-ons</Title>
        <Text>Add-ons help enhance your gaming experience</Text>

        <>
          {addOns.map(({ description, price, title, name }, index) => (
            <AddOnOption
              active={planState.addOns[name as AddOnsIndex]}
              yearMod={planState.paymentMethod === "yr"}
              price={price[planState.paymentMethod as "mo" | "yr"]}
              title={title}
              text={description}
              key={index}
              onClick={() => {
                dispatch({ type: `Set${name as AddOnsIndex}` });
              }}
            ></AddOnOption>
          ))}
        </>
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
          onClick={() => navigate("/summary")}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
}
