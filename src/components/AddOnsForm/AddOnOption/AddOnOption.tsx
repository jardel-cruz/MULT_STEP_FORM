import Title from "../../Title/Title";
import Text from "../../Text/Text";
import {
  AddOnOptionStyle,
  Checked,
  OptionDescriptionContainer,
} from "./AddOnOption_style";

interface AddOnOptionProps {
  title: string;
  text: string;
  price: number;
  active: boolean;
  yearMod: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function AddOnOption({
  onClick,
  active,
  price,
  text,
  title,
  yearMod,
}: AddOnOptionProps) {
  return (
    <AddOnOptionStyle active={active} onClick={onClick}>
      <Checked active={active}></Checked>
      <OptionDescriptionContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </OptionDescriptionContainer>
      {`+$${price}/${yearMod ? "yr" : "mo"}`}
    </AddOnOptionStyle>
  );
}
