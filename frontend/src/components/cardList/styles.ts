import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 1em;

  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
