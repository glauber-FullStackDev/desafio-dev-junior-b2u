import styled from "styled-components";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";

export const ContainerTable = styled(TableContainer)`
  max-width: 100%;
  background: #ffffff;
  border-radius: 3px;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2em;
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
