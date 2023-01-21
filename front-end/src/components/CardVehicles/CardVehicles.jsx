import * as S from "./Styled";
import { IoMdAdd } from "react-icons/io";

const CardVehicles = (props) => {
  const { vehicle, buttonDetails } = props;
  let description = vehicle.description.substr(0, 30);
  description = description.length < 30 ? description : description + "...";

  return (
    <S.Card key={vehicle.id}>
      <h3>{vehicle.carName}</h3>
      <p>{vehicle.brand}</p>
      <p>Ano: {vehicle.yearOfManufacture}</p>
      <S.Content>
        <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
      </S.Content>
      <S.Details onClick={() => buttonDetails(vehicle.id)}>
        Detalhes <IoMdAdd />
      </S.Details>
    </S.Card>
  );
};

export default CardVehicles;
