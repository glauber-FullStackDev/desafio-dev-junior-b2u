import { useEffect, useState } from "react";

import Header from "../../components/header";
import RowsTable from "../../components/rowsTable";
import FormBrands from "../../components/formBrands";

import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";

import { IBrands } from "../../interface/IBrands";
import getAllBrands from "../../services/brands/get-all-brands";

import {
  Container,
  ContainerTable,
  ContainerModal,
  Buttom,
  BoxModal,
} from "./styles";

const Brands = () => {
  const [brands, setBrands] = useState<IBrands[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getBrands = async () => {
    const response = await getAllBrands();
    if (response.erro) {
      toast.error(response.error);
    }
    setBrands(response);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      <Header />
      <ContainerModal>
        <Buttom onClick={handleOpen}>+ Add new brand</Buttom>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxModal>
            <FormBrands handleClose={handleClose} />
          </BoxModal>
        </Modal>
      </ContainerModal>

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
              
            </TableBody>
          </Table>
        </ContainerTable>
      </Container>
    </>
  );
};

export default Brands;
