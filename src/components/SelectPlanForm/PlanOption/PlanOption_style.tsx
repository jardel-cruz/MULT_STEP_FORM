import styled from "styled-components";
import iconArcade from "../../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../../assets/images/icon-advanced.svg";
import iconPro from "../../../assets/images/icon-pro.svg";

interface PlanCardInterface {
  icon: string;
  selected: boolean;
  yearMod?: boolean;
}

function findIcon(icon: string) {
  switch (icon) {
    case "Arcade":
      return iconArcade;
    case "Advanced":
      return iconAdvanced;
    case "Pro":
      return iconPro;
  }
}

export const PlanCard = styled.button<PlanCardInterface>`
  border: solid 1px
    ${(props) => (props.selected ? props.theme.colors.border : "gray")};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.background : "#fff"};
  width: 30%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: 1rem;

  h1 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
  }

  span {
    background-image: url(${(props) => findIcon(props.icon)});
    width: 40px;
    height: 40px;
    margin-bottom: 40%;
  }

  .monthFree {
    color: ${(props) => props.theme.colors.title};
    font-size: 0.9rem;
    margin-top: 0.7rem;
    display: ${(props) => (props.yearMod ? "block" : "none")};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.border};
  }
`;
