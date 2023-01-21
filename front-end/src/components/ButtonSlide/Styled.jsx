import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;

  bottom: 5vh;
  width: 100vw;
  height: 8vh;
  background: #e6e6e6;
`;

export const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background: #ebebf0;
  border-radius: 5px;
  border: 2px solid #d5d5de;
  margin-bottom: 25px;
  width: 192px;
  height: 70px;
`;

export const Next = styled.button`
  background-color: #ffffff;
  border: 2px solid;
  border-radius: 5px;
  height: 35px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
