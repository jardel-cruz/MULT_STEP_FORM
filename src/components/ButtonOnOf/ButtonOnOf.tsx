import { ButtonOnOfStyle, CircleOfButton } from "./ButtonOnOf_style";

interface ButtonOnOfProps {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  state: boolean;
}

export default function ButtonOnOf({ onClick, state }: ButtonOnOfProps) {
  return (
    <ButtonOnOfStyle state={state} onClick={onClick}>
      <CircleOfButton></CircleOfButton>
    </ButtonOnOfStyle>
  );
}
