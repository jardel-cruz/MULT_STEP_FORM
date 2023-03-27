import styled from "styled-components";
import iconThankYou from "../../assets/images/icon-thank-you.svg";

export const EndStyle = styled.section`
  margin-left: 0.5rem;
  padding: 1rem 5rem;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ThankYou = styled.span`
  background-image: url(${iconThankYou});
  background-repeat: no-repeat;
  display: block;
  width: 5rem;
  height: 5rem;
  margin: 1rem;
`;
