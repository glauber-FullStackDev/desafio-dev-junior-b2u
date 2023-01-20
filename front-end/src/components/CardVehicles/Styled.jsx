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
  text-align: center;
  border-radius: 3px;
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

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;
  border-radius: 5px;
  border: 2.4px solid #d5d5de;
  background: #ebebf0;
  word-break: break-word;
  padding-top: 5px;
  width: 100%;
  height: 210px;
`;
