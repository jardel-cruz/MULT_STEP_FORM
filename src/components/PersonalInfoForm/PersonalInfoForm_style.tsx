import styled from "styled-components";

interface InvalidMsgInterface {
  displayNone?: boolean;
}

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.label};
`;

export const InvalidMsg = styled.p<InvalidMsgInterface>`
  color: ${(props) => props.theme.colors.invalidBorder};
  display: ${(props) => (props.displayNone ? "none" : "bloc")};
`;
