import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { ContainerCard, Title, Description, Wrapper, SubTitle } from "./styles";
import { ICars } from "../../interface/ICars";

const CardCar = ({
  carId,
  index,
  carmModel,
  carYear,
  carDescription,
  carBrands,
}: ICars) => {
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
        <Button size="small">EDIT</Button>
        <Button size="small">DELETE</Button>
      </CardActions>
    </ContainerCard>
  );
};

export default CardCar;
