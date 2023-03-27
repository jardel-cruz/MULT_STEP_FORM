import { FormStyle } from "./Form_style";

interface FormProps {
  children?: JSX.Element[] | JSX.Element;
}

export default function Form({ children }: FormProps) {
  const eventOf = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return <FormStyle onSubmit={eventOf}>{children}</FormStyle>;
}
