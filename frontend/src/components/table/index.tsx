import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IUsers } from "../../interface/IUsers";

import RowsTable from "../rowsTable";
import { ContainerTable } from "./styles";

const TableInfo = ({users}: IUsers) => {
  return (
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
          <RowsTable users={users} />
        </TableBody>
      </Table>
    </ContainerTable>
  );
};

export default TableInfo;
