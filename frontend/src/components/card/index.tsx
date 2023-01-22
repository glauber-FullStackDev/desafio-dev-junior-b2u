import { useState } from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Form from "../../components/form";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

import { ContainerCard, Title, Description, Wrapper, SubTitle } from "./styles";
import { ICars } from "../../interface/ICars";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const CardCar = ({
  id,
  model,
  year,
  description,
  brandId,
  brands,
  userId,
  users,
  deleteCar,
}: ICars & { deleteCar: (id: string) => void }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerCard>
      <CardContent>
        <Title>{model}</Title>
        <SubTitle>{brands.brand}</SubTitle>
        <Wrapper>
          <Description>{description}</Description>
          <Description>Year {year}</Description>
          <Description>Dono: {users.name}</Description>
          <Description>email: {users.email}</Description>
          <Description>telefone: {users.phone}</Description>
        </Wrapper>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          EDIT
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Form
              handleClose={handleClose}
              car={{ id, model, year, description, brandId, userId }}
            />
          </Box>
        </Modal>
        <Button size="small" onClick={() => deleteCar(id)}>
          DELETE
        </Button>
      </CardActions>
    </ContainerCard>
  );
};

export default CardCar;
