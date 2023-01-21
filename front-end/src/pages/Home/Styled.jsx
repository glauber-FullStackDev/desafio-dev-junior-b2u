import styled from 'styled-components'

export const Container = styled.section`
    
`

export const AllCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  width: 96vw;
  margin: 2vh 5px 12vh 5px;
  gap: 5px;
  @media screen and (min-device-width: 800px) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 8px;
  }
`;

