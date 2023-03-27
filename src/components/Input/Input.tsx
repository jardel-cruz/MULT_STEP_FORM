import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  height: 2.5rem;
  margin: 0.5rem 0rem 1rem;
  border: solid 1px gray;

  &:focus {
    border-color: ${(props) => props.theme.colors.border};
    box-shadow: none;
    outline: 0;
  }

  &:invalid {
    border-color: ${(props) => {
      if (props.value && props.value.toString().length > 0)
        return props.theme.colors.invalidBorder;
      else return "gry";
    }};
  }
`;

export default Input;
