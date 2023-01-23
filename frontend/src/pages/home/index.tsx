import { useState } from "react";

import CardList from "../../components/cardList";
import Header from "../../components/header";
import Modal from "@mui/material/Modal";
import FormCars from "../../components/formCars";

import { ContainerModal, Buttom, BoxModal } from "./styles";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header />
      <ContainerModal>
        <Buttom onClick={handleOpen}>+ Add new car</Buttom>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxModal>
            <FormCars handleClose={handleClose} />
          </BoxModal>
        </Modal>
      </ContainerModal>
      <CardList />
    </>
  );
};

export default Home;
