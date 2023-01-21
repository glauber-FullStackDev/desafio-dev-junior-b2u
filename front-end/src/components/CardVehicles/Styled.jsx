import styled, { keyframes } from "styled-components";

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
  gap: 5px;
  background: #e6e6e6;
  border-radius: 3px;
  word-break: break-all;
  width: 116px;
  height: 170px;
  padding: 10px;
  opacity: 0;
  transform: translateX(-100px);
  animation: ${slideCard} 0.9s forwards;
  font-size: 0.8em;
  @media screen and (min-device-width: 800px) {
    width: 170px;
    height: 210px;
    font-size: 1em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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

  :hover,
  :active {
    background-color: #1d6fe9;
  }
`;
