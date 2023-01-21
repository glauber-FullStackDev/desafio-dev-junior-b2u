import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: #181818db;
`;
export const Hr = styled.hr`
  width: 300px;
  height: 3px;
  background: #0f52ba;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  word-break: break-all;
  gap: 20px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  width: 500px;
  height: 500px;
`;
export const Close = styled.button`
  background-color: black;
  color: white;
  border-radius: 100%;
  position: absolute;
  top: -11px;
  right: -5px;
  width: 25px;
  height: 25px;
`;

export const VehicleData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ContButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Delete = styled.button`
  border: none;
  width: 200px;
  background-color: #e71414;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #23222267;
  :hover,
  :active {
    background-color: #c63d3d;
  }
`;

export const Update = styled.button`
  border: none;
  width: 200px;
  background-color: #0f52ba;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #23222267;
  :hover,
  :active {
    background-color: #1d6fe9;
  }
`;
