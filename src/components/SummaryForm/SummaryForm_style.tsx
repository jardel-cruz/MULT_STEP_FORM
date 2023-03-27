import styled from "styled-components";
import Title from "../Title/Title";
import Text from "../Text/Text";

export const SummaryContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  padding: 1rem;
`;

export const SummaryTitle = styled(Title)`
  font-size: 1rem;
  margin: 0;
`;

export const SummaryText = styled(Text)`
  font-size: 1rem;
  margin: 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  padding-bottom: 1.5rem;

  p {
    color: ${(props) => props.theme.colors.title};
    font-weight: bold;
    font-size: 1rem;
  }

  a {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const ContainerAddOns = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }

  p {
    color: gray;
    font-size: 0.9rem;
  }

  span {
    font-size: 1rem;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  p {
    font-size: 1rem;
    color: gray;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.border};
  }
`;
