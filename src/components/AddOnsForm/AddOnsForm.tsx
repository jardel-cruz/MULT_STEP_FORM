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

type AddOnsIndex = "OnlineService" | "LargerStorage" | "CustomizableProfile";

export default function AddOnsForm() {
  const options = [
    {
      name: "OnlineService",
      title: "Online service",
      description: "Access to multiplayer game",
      price: 1,
    },
    {
      name: "LargerStorage",
      title: "Larger storage",
      description: "Extra 1TB cloud save",
      price: 2,
    },
    {
      name: "CustomizableProfile",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ];

  const [_, setStep] = useContext(StepContext).stepState;
  const [planObj, setPlan] = useContext(AppContext).planState;

  const navigate = useNavigate();
  const margin = "5.2rem";

  useEffect(() => setStep(3));

  return (
    <Form>
      <Title>Pick add-ons</Title>
      <Text>Add-ons help enhance your gaming experience</Text>

      <>
        {options.map(({ description, price, title, name }, index) => (
          <AddOnOption
            active={planObj.addOns[name as AddOnsIndex]}
            yearMod={planObj.paymentMethod === "yr"}
            price={price}
            title={title}
            text={description}
            key={index}
            onClick={() => {
              setPlan({
                ...planObj,
                addOns: {
                  ...planObj.addOns,
                  [name]: planObj.addOns[name as AddOnsIndex] ? false : true,
                },
              });
            }}
          ></AddOnOption>
        ))}
      </>

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
        onClick={() => navigate("/summary")}
      >
        Next Step
      </Button>
    </Form>
  );
}
