import styled from "styled-components";

interface ButtonInterface {
  marginTop?: string;
  floatPosition?: "left" | "right";
  backgroundColor?: string;
  houverColor?: string;
  color?: string;
}

const Button = styled.button<ButtonInterface>`
  color: ${(props) => (props.color ? props.color : "#fff")};
  float: ${(props) => (props.floatPosition ? props.floatPosition : "left")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  padding: 0.7rem 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.houverColor ? props.houverColor : "#fff"};
    color: ${(props) => (props.color === "grey" ? "black" : "")};
  }
`;

export default Button;
