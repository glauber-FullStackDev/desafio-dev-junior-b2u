import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { ContainerCard, Title, Description, Wrapper } from "./styles";

const CardCar = ({ id, index, model, year, description, brand }) => {
  return (
    <ContainerCard key={index}>
      <CardContent>
        <Title>{model}</Title>
        <Description>{brand}</Description>
        <Wrapper>
          <Description>{description}</Description>
          <Description>Year: {year}</Description>
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
