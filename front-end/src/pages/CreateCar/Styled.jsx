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

  margin-top: 10px;
  padding: 5px;
  gap: 7px;
  border: 1px solid #525151;
  box-shadow: 0 0 10px #23222267;
  border-radius: 8px;
  width: 500px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 340px;
  height: 35px;
  border-radius: 5px;
  border: none;
  border: 1px solid #414040cd;
  box-shadow: inset 0 0 5px #75737375;
`;
export const Description = styled.textarea`
  width: 340px;
  height: 35px;
  border-radius: 5px;
  border: none;
  border: 1px solid #414040cd;
  box-shadow: inset 0 0 5px #75737375;
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
