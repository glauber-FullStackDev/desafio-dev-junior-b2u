import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { ContainerCard, Title, Description } from "./styles";

const CardCar = () => {
  return (
    <ContainerCard>
      <CardContent>
        <Title>Lizard</Title>
        <Description>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Description>
      </CardContent>
      <CardActions>
        <Button size="small">EDIT</Button>
        <Button size="small">DELETE</Button>
      </CardActions>
    </ContainerCard>
  );
};

export default CardCar;
