import { useEffect, useState } from "react";

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

interface ITypes {
  id: string;
  visible: boolean;
}

const TableComponent = ({
  tableHeader,
  data,
  deleteFn,
}: {
  tableHeader: JSX.Element;
  data: any[];
  deleteFn: (id: string) => void;
}) => {
  const [open, setOpen] = useState([]);

  const handleOpen = (id: string) =>
    setOpen((prevState) => {
      return prevState.map((item: ITypes) => {
        if (item.id === id) {
          item.visible = true;
        }
        return item;
      });
    });

  const handleClose = (id: string) =>
    setOpen((prevState) => {
      return prevState.map((item: ITypes) => {
        if (item.id === id) {
          item.visible = false;
        }
        return item;
      });
    });

  useEffect(() => {
    if (data) {
      const tempArray: ITypes[] = [];
      data.map((item) => {
        tempArray.push({ id: item?.id, visible: false });
      });

      setOpen(tempArray);
    }
  }, [data]);

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
                  <IconButton onClick={() => handleOpen(item?.id)}>
                    <EditIcon />
                  </IconButton>
                  <Modal
                    open={
                      open
                        .filter((ite2: ITypes) => item.id === ite2.id)
                        .map((item3: ITypes) => item3.visible)[0]
                    }
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
