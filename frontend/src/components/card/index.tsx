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
  carId,
  index,
  carmModel,
  carYear,
  carDescription,
  carBrands,
  deleteCar,
}: ICars) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerCard key={index}>
      <CardContent>
        <Title>{carmModel}</Title>
        <SubTitle>{carBrands}</SubTitle>
        <Wrapper>
          <Description>{carDescription}</Description>
          <Description>Year {carYear}</Description>
        </Wrapper>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          EDIT
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Form handleClose={handleClose} car={{ carId }} />
          </Box>
        </Modal>
        <Button size="small" onClick={() => deleteCar(carId)}>
          DELETE
        </Button>
      </CardActions>
    </ContainerCard>
  );
};

export default CardCar;
