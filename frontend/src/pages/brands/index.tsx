import { useEffect, useState } from "react";

import Header from "../../components/header";
import FormBrands from "../../components/formBrands";

import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
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
import TableComponent from "../../components/table";

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
          <TableComponent
            tableHeader={
              <TableRow>
                <TableCell>Brands</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            }
            data={brands}
          />
        </ContainerTable>
      </Container>
    </>
  );
};

export default Brands;
