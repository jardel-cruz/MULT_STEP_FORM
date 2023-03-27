import { useContext } from "react";
import StepContext from "../../context/StepContext";
import { CardDiv, Section, Circle, Description, Stage } from "./Card_style";

interface CardProps {
  children?: JSX.Element;
}

export default function Card({ children }: CardProps) {
  const [step] = useContext(StepContext).stepState;
  const stageTitle = ["Your Info", "Select Plain", "Add-Ons", "Summary"];

  const validStep = (index: number) => step === index;

  const genStages = (title: string, index: number) => {
    const currentStep = index + 1;
    return (
      <Stage key={index}>
        <Circle active={validStep(currentStep)}>{currentStep}</Circle>
        <Description>
          <p>{`Step ${currentStep}`}</p>
          <h3>{title}</h3>
        </Description>
      </Stage>
    );
  };

  return (
    <CardDiv>
      <Section>{stageTitle.map(genStages)}</Section>
      {children}
    </CardDiv>
  );
}
