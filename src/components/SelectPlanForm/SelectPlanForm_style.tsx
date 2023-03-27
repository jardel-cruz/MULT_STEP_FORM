import styled from "styled-components";
import Text from "../Text/Text";

interface TextPaymentMethodInterface {
  active?: boolean;
}

export const CardsContainer = styled.fieldset`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  padding: 0;
`;

export const SelectPaymentMethodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 5px;
`;

export const TextPaymentMethod = styled(Text)<TextPaymentMethodInterface>`
  margin: 0 1rem;
  color: ${(props) => (props.active ? props.theme.colors.title : "grey")};
`;
