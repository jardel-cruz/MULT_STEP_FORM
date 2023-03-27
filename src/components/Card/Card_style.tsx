import styled from "styled-components";
import img from "../../assets/images/bg-sidebar-desktop.svg";

interface CircleInterface {
  active?: boolean;
}

export const CardDiv = styled.div`
  width: 55rem;
  height: 35rem;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 7px;
  padding: 0.7rem;
  display: flex;
`;

export const Section = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
`;

export const Stage = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const Circle = styled.div<CircleInterface>`
  width: 30px;
  height: 30px;
  text-align: center;
  border: ${(props) => (props.active ? "solid 0px #fff" : "solid 1px #fff")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  color: ${(props) => (props.active ? "#000" : "#fff")};
  font-weight: bold;
  background-color: ${(props) =>
    props.active ? props.theme.colors.circleBackground : ""};
`;

export const Description = styled.div`
  text-transform: uppercase;
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.8rem;
  }

  h3 {
    color: #fff;
    font-size: 0.9rem;
  }
`;
