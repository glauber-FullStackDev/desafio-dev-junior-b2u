import styled from "styled-components";
import Card from "@mui/material/Card";

export const ContainerCard = styled(Card)`
  width: 345px;
  min-width: 235px;
  margin: 1em;

  @media screen and (max-width: 768px) {
    width: 245px;
  }
`;
export const Title = styled.h2``;

export const SubTitle = styled.h4`
  font-weight: 500;
  color: #A1A1A1;
`;

export const Description = styled.p``;

export const Wrapper = styled.div`
  padding-top: 2em;
`;
