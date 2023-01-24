import styled from "styled-components";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";

export const ContainerTable = styled(TableContainer)`
  max-width: 100%;
  background: #ffffff;
  border-radius: 3px;
`;

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
