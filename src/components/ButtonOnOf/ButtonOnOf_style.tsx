import styled from "styled-components";

interface ButtonOnOfInterface {
  state: boolean;
}

export const ButtonOnOfStyle = styled.button<ButtonOnOfInterface>`
  border: none;
  width: 50px;
  height: 25px;
  border: solid 1px black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: ${(props) => (props.state ? "flex-end" : "flex-start")};
  background-color: ${(props) => props.theme.colors.title};
`;

export const CircleOfButton = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 17px;
  width: 17px;
`;
