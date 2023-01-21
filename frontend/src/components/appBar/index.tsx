import { useState } from "react";

import { Buttom, Container } from "./styles";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const AppBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Buttom onClick={handleOpen}>+ Add Your Car</Buttom>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

export default AppBar;
