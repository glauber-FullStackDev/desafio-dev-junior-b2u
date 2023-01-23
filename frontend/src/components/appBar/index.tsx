import {  useState } from "react";

import { Buttom, Container } from "./styles";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormCars from "../formCars";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const AppBar = ({children} : {children: string}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Buttom onClick={handleOpen}>{children}</Buttom>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormCars handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

export default AppBar;
