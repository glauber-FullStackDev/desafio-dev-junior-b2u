import Header from "../../components/header";
import RowsTable from "../../components/rowsTable";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Container, ContainerTable } from "./styles";

const Brands = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerTable>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RowsTable />
            </TableBody>
          </Table>
        </ContainerTable>
      </Container>
    </>
  );
};

export default Brands;
