import * as S from "./Styled"

const CardVehicles = (props) => {
  const {vehicles,count,totalCard} = props
  return (
    <S.Container>
      {vehicles?.map((vehicle,index) =>{
        const from = (count - totalCard)
        if (index >= from && index < count) {
        return (
          <S.Card>
            <h3>Modelo: {vehicle.carName}</h3>
            <p>{vehicle.description}</p>
            <p>Ano: {vehicle.yearOfManufacture}</p>
            <p>Marca: {vehicle.brand}</p>
            <button>Detalhes</button>
          </S.Card>
        )
        }
      })}
    </S.Container>
  )
}

export default CardVehicles