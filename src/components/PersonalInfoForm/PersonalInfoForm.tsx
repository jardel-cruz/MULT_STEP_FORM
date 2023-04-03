import Button from "../Button/Button";
import Form from "../Form/Form";
import Title from "../Title/Title";
import Text from "../Text/Text";
import themes from "../../assets/styles/themes";
import Input from "../Input/Input";
import AppContext from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { controllerInput, telInputController } from "../../utils/input";
import {
  Fieldset,
  ContainerLabel,
  InvalidMsg,
  Label,
} from "./PersonalInfoForm_style";
import { useNavigate } from "react-router-dom";
import StepContext from "../../context/StepContext";

export default function PersonalInfoForm() {
  const { userState } = useContext(AppContext);
  const [_, setStep] = useContext(StepContext).stepState;
  const [userInfos] = userState;
  const [validInputs, setValid] = useState({ email: true, tel: true });
  const navigate = useNavigate();
  const inputsEmpty =
    userInfos.email.length > 0 &&
    userInfos.name.length > 0 &&
    userInfos.tel.length > 0;

  const controleValidInput = (key: "email" | "tel") => {
    return ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      target.checkValidity() ||
      target.value.length < 1 ||
      /\([0-9]{2}\)[0-9]{9}/g.test(target.value)
        ? setValid({ ...validInputs, [key]: true })
        : setValid({ ...validInputs, [key]: false });
    };
  };

  useEffect(() => {
    setStep(1);
  });

  return (
    <Form>
      <Fieldset>
        <Title>Personal info</Title>
        <Text>Please provide your name, email address, and phone number.</Text>
        <ContainerLabel>
          <Label htmlFor="name">Name</Label>
        </ContainerLabel>
        <Input
          type="text"
          id="name"
          placeholder="Ex: My Name"
          value={userInfos.name}
          onChange={controllerInput("name", userState)}
          required
        />

        <ContainerLabel>
          <Label htmlFor="email">Email Address</Label>
          <InvalidMsg displayNone={validInputs.email}>Invalid Email</InvalidMsg>
        </ContainerLabel>
        <Input
          type="email"
          id="email"
          placeholder="ex: email@email.com"
          value={userInfos.email}
          onChange={(event) => {
            controllerInput("email", userState)(event);
            controleValidInput("email")(event);
          }}
          required
        />

        <ContainerLabel>
          <Label htmlFor="phone">Phone Number</Label>
          <InvalidMsg displayNone={validInputs.tel}>Invalid Phone</InvalidMsg>
        </ContainerLabel>
        <Input
          type="tel"
          id="phone"
          pattern="\([0-9]{2}\)[0-9]{9}"
          placeholder="(00)000000000"
          value={userInfos.tel}
          onChange={(event) => {
            telInputController(userState)(event);
            controleValidInput("tel")(event);
          }}
          required
        />
      </Fieldset>
      <div>
        <Button
          floatPosition="right"
          backgroundColor={themes.colors.button}
          houverColor={themes.colors.buttonHover1}
          color={"#fff"}
          onClick={() => {
            if (validInputs.email && validInputs.tel && inputsEmpty) {
              navigate("/plan");
            }
          }}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
}
