import styled from "styled-components";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonClose = styled.button`
  border: none;
  padding: 0.8em;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.2s;

  background: #000000;
  color: #ffffff;

  &:hover {
    color: #c7a85f;
  }
`;

export const ContainerForm = styled.form`
  width: 50%;
  padding: 3em;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const SelectField = styled(Select)`
  width: 100%;
`;

export const WrapperClose = styled(Wrapper)`
  justify-content: center;
  margin-top: 2em;

  > button {
    width: 100%;
  }
`;
