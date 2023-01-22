
import {
  Container,
} from "./styles";

import { ICar } from "../../@types";

export function ListCar (data: any) {

  return (
    <Container>
      <p>{data.owner}</p>
    </Container>
  )

}