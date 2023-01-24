import { useState } from "react";

import { BoxModal, ContainerTable } from "./styles";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import FormUsers from "../formUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import FormBrands from "../formBrands";

const TableComponent = ({
  tableHeader,
  data,
  deleteFn,
}: {
  tableHeader: JSX.Element;
  data: any[];
  deleteFn: (id: string) => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerTable>
      <Table>
        <TableHead>{tableHeader}</TableHead>
        <TableBody>
          {data.map((item, index) => (
            <>
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item?.name || item?.brand}
                </TableCell>

                <TableCell align="right">{item?.email}</TableCell>
                <TableCell align="right">{item?.phone}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={handleOpen}>
                    <EditIcon />
                  </IconButton>
                  <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <BoxModal>
                      {item?.name ? (
                        <FormUsers users={item} handleClose={handleClose} />
                      ) : (
                        <FormBrands brands={item} handleClose={handleClose} />
                      )}
                    </BoxModal>
                  </Modal>
                  <IconButton onClick={() => deleteFn(item?.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </ContainerTable>
  );
};

export default TableComponent;
