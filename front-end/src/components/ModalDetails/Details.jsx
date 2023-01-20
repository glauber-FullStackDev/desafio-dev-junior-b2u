import * as S from './Styled'


const Details = (props) => {
  const {vehicleDetails,modal} = props
  return (
    <>
    {!modal ? null :
    <S.Container>
        <S.Content>
          <h1>Dados do Veiculo</h1>
          <p>Marca: {vehicleDetails.brand}</p>
          <p>Modelo: {vehicleDetails.carName}</p>
          <p>Modelo: {vehicleDetails.yearOfManufacture}</p>
          <p>Modelo: {vehicleDetails.description}</p>

          <h1>Dados do Proprietario</h1>
          <p>Modelo: {vehicleDetails.description}</p>
          <p>Modelo: {vehicleDetails.description}</p>
          <p>Modelo: {vehicleDetails.description}</p>
        </S.Content>
    </S.Container>
    }
    </>
  )
}

export default Details