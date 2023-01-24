import styled from "styled-components";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2em;
`;
export const ContainerTable = styled(TableContainer)`
  text-align: center;
  max-width: 500px;
  background: #ffffff;
  border-radius: 3px;
`;

export const ContainerModal = styled.div`
  width: 100%;
  padding: 1em;
  padding-right: 2em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #cfcfcf;
`;

export const Buttom = styled.button`
  border: none;
  background: #000000;
  padding: 0.7em;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;

  transition: all ease 0.2s;

  &:hover {
    color: #c7a85f;
  }
`;

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
