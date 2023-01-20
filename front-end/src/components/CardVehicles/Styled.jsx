import styled, { keyframes } from "styled-components";

export const Container = styled.section`
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

const slideCard = keyframes`
    to {
        opacity: 1;
        transform: translateX(0px);
    }  
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #e6e6e6;
  border-radius: 3px;
  word-break: break-all;
  width: 116px;
  height: 170px;
  padding: 10px;
  opacity: 0;
  transform: translateX(-100px);
  animation: ${slideCard} 0.9s forwards;
  @media screen and (min-device-width: 800px) {
    width: 170px;
    height: 210px;
  }
`;

export const Content = styled.div`

`

export const Details = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  gap: 8px;
  background-color: #0f52ba;
  border-radius: 0 0 8px 8px;
  color: white;
  border: none;
  height: 32px;
`;
