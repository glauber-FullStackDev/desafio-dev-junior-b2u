import * as S from "./Styled"

const CardVehicles = (props) => {
  console.log(props.vehicles)
  return (
    <>
      {props?.vehicles?.map(vehicle =>{
        return (
          <S.Card>
            <h3>Modelo: {vehicle.carName}</h3>
            <p>{vehicle.description}</p>
            <p>Ano: {vehicle.yearOfManufacture}</p>
            <p>Marca: {vehicle.brand}</p>
            <button>Detalhes</button>
          </S.Card>
        )

      })}
    </>
  )
}

export default CardVehicles