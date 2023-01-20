import * as S from "./Styled";
import { IoMdAdd } from 'react-icons/io'

const CardVehicles = (props) => {
  const { vehicles, count, totalCard,buttonDetails } = props;
  return (
    <S.Container>
      {vehicles?.map((vehicle, index) => {
        const from = count - totalCard;
        let description = vehicle.description.substr(0, 55)
        description = description.length < 55 ? description : description + "..."

        if (index >= from && index < count) {
          return (
            <S.Card key={vehicle.id}>
              <h3>{vehicle.carName}</h3>
              <p>{vehicle.brand}</p>
              <p>Ano: {vehicle.yearOfManufacture}</p>
              <S.Content>
                <p>{description.charAt(0).toUpperCase()+description.slice(1)}</p>
              </S.Content>
              <S.Details onClick={()=>buttonDetails(vehicle.id)}>Detalhes <IoMdAdd /></S.Details>
            </S.Card>
          );
        }
      })}
    </S.Container>
  );
};

export default CardVehicles;
