import * as S from "./Styled";
import {IoMdAdd} from 'react-icons/io'

const CardVehicles = (props) => {
  const { vehicles, count, totalCard } = props;
  return (
    <S.Container>
      {vehicles?.map((vehicle, index) => {
        const from = count - totalCard;
        const description = vehicle.description.substr(0,35) + "..."
        
        if (index >= from && index < count) {
          return (
            <S.Card>
              <S.Content>
                <h3>{vehicle.carName}</h3>
                <p>Ano: {vehicle.yearOfManufacture}</p>
                <p>Marca: {vehicle.brand}</p>
                <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
              </S.Content>
             
              <S.Details>Detalhes <IoMdAdd/></S.Details>
            </S.Card>
          );
        }
      })}
    </S.Container>
  );
};

export default CardVehicles;
