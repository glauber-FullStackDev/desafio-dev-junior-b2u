import { useState } from "react";
import { IUsers } from "../../interface/IUsers";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormUsers from "../formUsers";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const RowsTable = ({
  id,
  name,
  email,
  phone,
  deleteUser,
}: IUsers & { deleteUser: (id: string) => void }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleOpen}>
          <EditIcon />
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <FormUsers handleClose={handleClose} />
            </Box>
          </Modal>
        </IconButton>

        <IconButton onClick={() => deleteUser(id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default RowsTable;
