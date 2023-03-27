import styled from "styled-components";
import checkedIcon from "../../../assets/images/icon-checked.svg";

interface CheckedInterface {
  active?: boolean;
}

export const AddOnOptionStyle = styled.button<CheckedInterface>`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: solid 1px
    ${(props) =>
      props.active ? props.theme.colors.border : props.theme.colors.lightGray};
  border-radius: 5px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.background : "#fff"};

  cursor: pointer;
`;

export const Checked = styled.span<CheckedInterface>`
  width: 20px;
  height: 20px;
  background-image: ${(props) =>
    props.active ? `url(${checkedIcon})` : "none"};
  background-position: center center;
  background-color: ${(props) =>
    props.active ? props.theme.colors.border : "#fff"};
  display: block;
  border: ${(props) =>
    props.active ? "none" : `solid 1px ${props.theme.colors.lightGray}`};
  border-radius: 5px;
  margin: 0px 1rem;
  background-size: 0.8rem;
  background-repeat: no-repeat;
`;

export const OptionDescriptionContainer = styled.div`
  text-align: initial;
  width: 70%;
  padding-left: 1rem;

  h1 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;
