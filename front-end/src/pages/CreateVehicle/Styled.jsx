import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Err = styled.p`
  color: red;
`;
export const Hr = styled.hr`
  width: 300px;
  height: 3px;
  background: #0f52ba;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 1px;
  gap: 2px;
  border: 1px solid #525151;
  box-shadow: 0 0 10px #23222267;
  border-radius: 8px;
  width: 500px;
  height: 80vh;

  @media screen and (max-device-width: 500px) {width: 100vw;}
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  width: 340px;
  height: 35px;
  border-radius: 5px;
  border: none;
  border: 1px solid #414040cd;
  box-shadow: inset 0 0 5px #75737375;
  @media screen and (max-device-width: 360px){width:290px;}
`;
export const Description = styled.textarea`
  width: 340px;
  height: 35px;
  border-radius: 5px;
  border: none;
  border: 1px solid #414040cd;
  box-shadow: inset 0 0 5px #75737375;
  @media screen and (max-device-width: 360px){width:290px;}
`;

export const NeVehicle = styled.button`
  border: none;
  width: 200px;
  background-color: #0f52ba;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #23222267;
`;
