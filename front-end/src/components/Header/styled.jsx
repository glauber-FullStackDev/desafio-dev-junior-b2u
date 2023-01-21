import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 14vh;
  background: #0f52ba;
`;
export const Logo = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: baseline;
  gap: 4px;
  color: white;
  margin-left: 50px;
`;
export const TitleLogo = styled.h1`
  font-size: 40px;
`;

export const AddVehicle = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  border: none;
  color: #0f52ba;
  padding: 10px;
  border-radius: 5px;
  margin-right: 30px;
  :hover,
  :active {
    box-shadow: 0 0 10px #eeeaeaeb;
  }
`;
