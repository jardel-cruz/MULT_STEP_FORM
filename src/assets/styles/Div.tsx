import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  font-family: Ubuntu;
`;

export default Div;
